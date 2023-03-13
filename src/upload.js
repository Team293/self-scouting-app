let authData = null;

class DatabaseConnector {
    constructor() {
        const PocketBase = window.PocketBase;
        this.pb = new PocketBase("https://immense-scooter.pockethost.io");
    }

    async authenticate(email, password) {
        console.log("Authenticating...");
        this.auth = await this.pb.admins.authWithPassword(email, password)
        .catch((err) => {
            console.log("Something went wrong. Likely invalid credentials.");
        });
    }

    async export() {

    }

    async generateMatch(match) {
        if (!this.auth) {
            console.log("Not authenticated. Please authenticate first.");
            return;
        }

        // Loop over each team and generate the teams necessary data
        const redAlliance = [];
        console.log("LOADING RED ALLIANCE");
        await match.redAlliance.robots.forEach(async (robot) => {
            const teamId = robot.team;
            // get team data from database
            const record = await this.pb.collection('teams').getFirstListItem('teamNumber=' + teamId, { '$autoCancel': false })
            .catch((err) => {
                return null;
            });

            if (record !== null) {
                console.log("Team found: " + teamId);
                redAlliance.push(record);
            } else {
                console.log("Team not found: " + teamId);
                console.log("Creating team...");
                const team = {
                    teamNumber: teamId,
                    teamName: "Team " + teamId,
                };
                const record = await this.pb.collection('teams').create(team, { '$autoCancel': false });
                redAlliance.push(record);
            }
        });

        const blueAlliance = [];
        console.log("LOADING BLUE ALLIANCE");
        await match.blueAlliance.robots.forEach(async (robot) => {
            const teamId = robot.team;
            // get team data from database
            const record = await this.pb.collection('teams').getFirstListItem('teamNumber=' + teamId, { '$autoCancel': false })
            .catch((err) => {
                return null;
            });

            if (record !== null) {
                console.log("Team found: " + teamId);
                redAlliance.push(record);
            } else {
                console.log("Team not found: " + teamId);
                console.log("Creating team...");
                const team = {
                    teamNumber: teamId,
                    teamName: "Team " + teamId,
                };
                const record = await this.pb.collection('teams').create(team);
                redAlliance.push(record);
            }
        });
    } 
}


async function generateTest(match) {
    const db = new DatabaseConnector();
    await db.authenticate(document.getElementById("email").value, document.getElementById("password").value);
    await db.generateMatch(match);
}

window.generateTest = generateTest;