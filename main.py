import requests
from values import POINT_VALUES as point_values
import math
import json

# url = "https://immense-scooter.pockethost.io/api/collections/matches/records/"
cube = 1
cone = 2

# expand_items = [
#     "redAlliance",
#     "blueAlliance",
#     "events.team",
#     "events.fieldState",
#     "expand.events",
#     "events",
# ]

# params = f"?expand={','.join(expand_items)}"
# id = "kk3t1vp1go62609"

# # send a GET request
# response = requests.get(url + id + params).json()
# match_data = response.get("matchData")

# print(json.dumps(match_data, indent=4))

# load data from input.json
match_data = json.load(open("input.json"))


def cycle_time(robot, piece_type=None, return_total_cycles=False):
    if piece_type is None:
        piece_type = [cube, cone]
    # get all piece score events
    piece_score_events = [
        event
        for event in match_data.get("events")
        if event.get("eventType") == "pieceScore"
        and event.get("robot") == robot
        and event.get("pieceType") in piece_type
    ]

    # get the time between each piece score event
    time_between_piece_score_events = [
        round(piece_score_events[i + 1]["time"] - piece_score_events[i]["time"], 3)
        for i in range(len(piece_score_events) - 1)
    ]

    # get the average time between piece score events
    cycle_time = None
    try:
        cycle_time = round(
        sum(time_between_piece_score_events) / len(time_between_piece_score_events), 3
    )
    except ZeroDivisionError:
        # print("No piece score events found for piece types(s):", piece_type)
        # default to infinity
        cycle_time = float('inf')

    if return_total_cycles:
        return cycle_time, len(time_between_piece_score_events)
    else:
        return cycle_time


def number_of_cycles(robot):
    # get cycle time for cubes and cones
    _, cube_cycle_count = cycle_time(robot, [cube], return_total_cycles=True)
    _, cone_cycle_count = cycle_time(robot, [cone], return_total_cycles=True)

    return cube_cycle_count + cone_cycle_count


def number_of_cycles_per_minute(robot):
    # get cycle time for cubes and cones
    _, cube_cycle_count = cycle_time(robot, [cube], return_total_cycles=True)
    _, cone_cycle_count = cycle_time(robot, [cone], return_total_cycles=True)

    return (cube_cycle_count + cone_cycle_count) / 2.5


def cubes_vs_cones(robot):
    # get cycle time for cubes and cones
    cube_cycle_time = cycle_time(robot, [cube])
    cone_cycle_time = cycle_time(robot, [cone])

    return "cubes" if cube_cycle_time < cone_cycle_time else "cones"


def generate_grid(robot):
    # make 2 empty grids with 3 rows and 9 columns
    red_scoring_grid = [0] * 27
    blue_scoring_grid = [0] * 27

    # get all piece score events
    piece_score_events = [
        event
        for event in match_data.get("events")
        if event["eventType"] == "pieceScore" and event.get("robot") == robot
    ]

    # add 1 or 2 to the grid position of each piece score event
    for event in piece_score_events:
        if event["pieceType"] == cube:
            grid_position = event["gridPosition"]
            if event["robot"] in match_data["redAlliance"]:
                red_scoring_grid[grid_position] += 1
            elif event["robot"] in match_data["blueAlliance"]:
                blue_scoring_grid[grid_position] += 1

    return red_scoring_grid, blue_scoring_grid


def get_total_points(robot, scoring_only=False):
    points = 0

    red_scoring_grid, blue_scoring_grid = generate_grid(robot)

    # -------------------------- AUTO --------------------------

    # get all events in auto, the first 30 seconds
    auto_events = [event for event in match_data.get("events") if event["time"] <= 15 and event.get("robot") == robot]

    if not scoring_only:
        # get the last chargeStation event that occurred in auto
        # try getting
        try:
            last_charge_station_event = [
                event
                for event in auto_events
                if "chargeStation" in event["eventType"] and event.get("robot") == str(robot)
            ][-1]

            # if the event was a chargeStationEngaged event, add 12 points, otherwise add 8 points
            if last_charge_station_event["eventType"] == "chargeStationEngaged":
                points += point_values["AUTO"]["DOCKED_AND_ENGAGED"]
            elif last_charge_station_event["eventType"] == "chargeStationDock":
                points += point_values["AUTO"]["DOCKED_NOT_ENGAGED"]
        except IndexError as e:
            pass

    # get all pieceScore events that occurred in auto
    auto_piece_score_events = [
        event
        for event in auto_events
        if event["eventType"] == "pieceScore" and event.get("robot") == robot
    ]

    # add points for each pieceScore event
    for event in auto_piece_score_events:
        # get the row, 0 is top, 1 is middle, 2 is bottom
        row = math.floor(event["gridPosition"] / 9)
        points += point_values["AUTO"]["GAME_PIECES"][row]

    # find any mobility events that occurred in auto, if there are any, add 3 points
    if [
        event
        for event in auto_events
        if event["eventType"] == "mobility" and event.get("robot") == robot
    ]:
        points += point_values["AUTO"]["MOBILITY"]

    # -------------------------- TELEOP --------------------------

    # get all events in teleop, the first 30 seconds
    teleop_events = [event for event in match_data.get("events") if event["time"] > 15]

    last_charge_station_event = None
    try:
        # get the last chargeStation event that occurred in teleop
        last_charge_station_event = [
        event
        for event in teleop_events
        if "chargeStation" in event["eventType"] and event.get("robot") == robot
    ][-1]
        # if the event was a chargeStationEngaged event, add 12 points, otherwise add 8 points
        if last_charge_station_event["eventType"] == "chargeStationEngaged":
            points += point_values["TELEOP"]["DOCKED_AND_ENGAGED"]
        elif last_charge_station_event["eventType"] == "chargeStationDock":
            points += point_values["TELEOP"]["DOCKED_NOT_ENGAGED"]
    except IndexError as e:
        # no final charge station event, so ignore
        pass


    # get all pieceScore events that occurred in teleop
    teleop_piece_score_events = [
        event
        for event in teleop_events
        if event["eventType"] == "pieceScore" and event.get("robot") == robot
    ]

    # add points for each pieceScore event
    for event in teleop_piece_score_events:
        # get the row, 0 is top, 1 is middle, 2 is bottom
        # 9
        row = math.floor(event["gridPosition"] / 9)
        points += point_values["TELEOP"]["GAME_PIECES"][row]

    # if robot is in blue alliance call calculate_link_bonus with the blue scoring grid
    if robot in match_data["blueAlliance"]:
        points += calculate_link_bonus(blue_scoring_grid)
    elif robot in match_data["redAlliance"]:
        points += calculate_link_bonus(red_scoring_grid)

    return points


def points_per_minute(robot):
    total_points = get_total_points(robot)

    return total_points / 2.5


def points_per_cycle(robot):
    total_points = get_total_points(robot, scoring_only=True)
    _, cycles = cycle_time(robot, return_total_cycles=True)

    return total_points / cycles


def calculate_link_bonus(grid):
    score = 0
    count = 0

    for i, piece in enumerate(grid):
        if i % 9 == 0:
            count = 0

        if piece != 0:
            count += 1

        if count > 3:
            score += point_values["teleop"]["link"]
            count = 0

    return score


team = "293"
team_data = {
    "team": team,
    "location": match_data.get("location"),
    "cycle_time": f"{cycle_time(team)} sec",
    "cubes_vs_cones": cubes_vs_cones(team),
    "points_per_minute": f"{points_per_minute(team)} pts/cycle",
    "points_per_cycle": f"{points_per_cycle(team)} pts/min",
    "number_of_cycles": f"{number_of_cycles(team)} cycles",
    "cycles_per_minute": f"{number_of_cycles_per_minute(team)} cycles/min",
}

print("\nFRC 2023 Match Data Analyzer - Trevor Daly, Elliot Scully\n")

print(f"Date: {match_data.get('date')}")
print("Team".ljust(20, " ") + f" \033[1m{team_data['team']}\033[0m")
print("Match Number".ljust(20, " ") + f" \033[1m{match_data.get('matchNumber')}\033[0m")
print("Red Alliance".ljust(20, " ") + f" \033[1m{', '.join(match_data.get('redAlliance'))}\033[0m")
print("Blue Alliance".ljust(20, " ") + f" \033[1m{', '.join(match_data.get('blueAlliance'))}\033[0m")
print("")
print(f"Cycle time of".ljust(20, " ") + f" \033[1m{team_data['cycle_time']}\033[0m")
print(f"Better at scoring".ljust(20, " ") + f" \033[1m{team_data['cubes_vs_cones']}\033[0m")
print("".ljust(20, " ") + f" \033[1m{team_data['points_per_cycle']}\033[0m")
print(
    "".ljust(20, " ") + f" \033[1m{team_data['points_per_minute']}\033[0m"
)
print("".ljust(20, " ") + f" \033[1m{team_data['number_of_cycles']}\033[0m")
print("".ljust(20, " ") + f" \033[1m{team_data['cycles_per_minute']}\033[0m")
print("")
