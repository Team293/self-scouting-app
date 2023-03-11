function Q5(e) {
  "use strict";
  return new (function e(t) {
    let n = "global" == t ? window : this;
    n.canvas = document.createElement("canvas");
    let o = n.canvas.getContext("2d");
    n.width = 100;
    n.height = 100;
    n.canvas.width = n.width;
    n.canvas.height = n.height;
    "offscreen" != t &&
      (document.body
        ? document.body.appendChild(n.canvas)
        : window.addEventListener("load", function () {
            document.body.appendChild(n.canvas);
          }));
    m();
    n.MAGIC = 161533525;
    n.RGB = 0;
    n.HSV = 1;
    n.HSB = 1;
    n.CHORD = 0;
    n.PIE = 1;
    n.OPEN = 2;
    n.RADIUS = 1;
    n.CORNER = 2;
    n.CORNERS = 3;
    n.ROUND = "round";
    n.SQUARE = "butt";
    n.PROJECT = "square";
    n.MITER = "miter";
    n.BEVEL = "bevel";
    n.CLOSE = 1;
    n.BLEND = "source-over";
    n.REMOVE = "destination-out";
    n.ADD = "lighter";
    n.DARKEST = "darken";
    n.LIGHTEST = "lighten";
    n.DIFFERENCE = "difference";
    n.SUBTRACT = "subtract";
    n.EXCLUSION = "exclusion";
    n.MULTIPLY = "multiply";
    n.SCREEN = "screen";
    n.REPLACE = "copy";
    n.OVERLAY = "overlay";
    n.HARD_LIGHT = "hard-light";
    n.SOFT_LIGHT = "soft-light";
    n.DODGE = "color-dodge";
    n.BURN = "color-burn";
    n.NORMAL = "normal";
    n.ITALIC = "italic";
    n.BOLD = "bold";
    n.BOLDITALIC = "italic bold";
    n.CENTER = "center";
    n.LEFT = "left";
    n.RIGHT = "right";
    n.TOP = "top";
    n.BOTTOM = "bottom";
    n.BASELINE = "alphabetic";
    n.LANDSCAPE = "landscape";
    n.PORTRAIT = "portrait";
    n.ALT = 18;
    n.BACKSPACE = 8;
    n.CONTROL = 17;
    n.DELETE = 46;
    n.DOWN_ARROW = 40;
    n.ENTER = 13;
    n.ESCAPE = 27;
    n.LEFT_ARROW = 37;
    n.OPTION = 18;
    n.RETURN = 13;
    n.RIGHT_ARROW = 39;
    n.SHIFT = 16;
    n.TAB = 9;
    n.UP_ARROW = 38;
    n.HALF_PI = Math.PI / 2;
    n.PI = Math.PI;
    n.QUARTER_PI = Math.PI / 4;
    n.TAU = 2 * Math.PI;
    n.TWO_PI = 2 * Math.PI;
    n.THRESHOLD = 1;
    n.GRAY = 2;
    n.OPAQUE = 3;
    n.INVERT = 4;
    n.POSTERIZE = 5;
    n.DILATE = 6;
    n.ERODE = 7;
    n.BLUR = 8;
    n.ARROW = "default";
    n.CROSS = "crosshair";
    n.HAND = "pointer";
    n.MOVE = "move";
    n.TEXT = "text";
    n.VIDEO = { video: !0, audio: !1 };
    n.AUDIO = { video: !1, audio: !0 };
    n.SHR3 = 1;
    n.LCG = 2;
    n.HARDWARE_FILTERS = !0;
    n.hint = function (e, t) {
      n[e] = t;
    };
    n.frameCount = 0;
    n.mouseX = 0;
    n.mouseY = 0;
    n.pmouseX = 0;
    n.pmouseY = 0;
    n.mouseButton = null;
    n.keyIsPressed = !1;
    n.mouseIsPressed = !1;
    n.key = null;
    n.keyCode = null;
    n.pixels = null;
    n.accelerationX = 0;
    n.accelerationY = 0;
    n.accelerationZ = 0;
    n.rotationX = 0;
    n.rotationY = 0;
    n.rotationZ = 0;
    n.relRotationX = 0;
    n.relRotationY = 0;
    n.relRotationZ = 0;
    n.pAccelerationX = 0;
    n.pAccelerationY = 0;
    n.pAccelerationZ = 0;
    n.pRotationX = 0;
    n.pRotationY = 0;
    n.pRotationZ = 0;
    n.pRelRotationX = 0;
    n.pRelRotationY = 0;
    n.pRelRotationZ = 0;
    n.touches = [];
    n._colorMode = n.RGB;
    n._noStroke = !1;
    n._noFill = !1;
    n._ellipseMode = n.CENTER;
    n._rectMode = n.CORNER;
    n._curveDetail = 20;
    n._curveAlpha = 0;
    n._noLoop = !1;
    n._textFont = "sans-serif";
    n._textSize = 12;
    n._textLeading = 12;
    n._textStyle = "normal";
    n._pixelDensity = 1;
    n._frameRate = null;
    n._tint = null;
    let a = null;
    let r = !0;
    let i = [];
    let l = null;
    let u = 0;
    let s = {};
    let c = 0;
    let h = null;
    let f = null;
    let d = null;
    Object.defineProperty(n, "deviceOrientation", {
      get: function () {
        return 90 == Math.abs(window.orientation) ? n.LANDSCAPE : n.PORTRAIT;
      },
    });
    Object.defineProperty(n, "windowWidth", {
      get: function () {
        return window.innerWidth;
      },
    });
    Object.defineProperty(n, "windowHeight", {
      get: function () {
        return window.innerHeight;
      },
    });
    Object.defineProperty(n, "drawingContext", {
      get: function () {
        return o;
      },
    });
    n.createCanvas = function (e, t) {
      (n.width = e),
        (n.height = t),
        (n.canvas.width = e),
        (n.canvas.height = t),
        m();
    };
    n.resizeCanvas = function (e, t) {
      (n.width = e),
        (n.height = t),
        (n.canvas.width = e),
        (n.canvas.height = t);
    };
    n.createGraphics = n.createImage = function (t, n) {
      let o = new e("offscreen");
      return o.createCanvas(t, n), o.noLoop(), o;
    };
    n.pixelDensity = function (e) {
      return null == e
        ? n._pixelDensity
        : ((n._pixelDensity = e),
          (n.canvas.width = Math.ceil(n.width * e)),
          (n.canvas.height = Math.ceil(n.height * e)),
          (n.canvas.style.width = n.width + "px"),
          (n.canvas.style.height = n.height + "px"),
          o.scale(n._pixelDensity, n._pixelDensity),
          m(),
          n._pixelDensity);
    };
    n.map = function (e, t, n, o, a, r) {
      let i = o + ((1 * (e - t)) / (n - t)) * (a - o);
      return r
        ? o < a
          ? Math.min(Math.max(i, o), a)
          : Math.min(Math.max(i, a), o)
        : i;
    };
    n.lerp = function (e, t, n) {
      return e * (1 - n) + t * n;
    };
    n.constrain = function (e, t, n) {
      return Math.min(Math.max(e, t), n);
    };
    n.dist = function () {
      return 4 == arguments.length
        ? Math.hypot(arguments[0] - arguments[2], arguments[1] - arguments[3])
        : Math.hypot(
            arguments[0] - arguments[3],
            arguments[1] - arguments[4],
            arguments[2] - arguments[5]
          );
    };
    n.norm = function (e, t, o) {
      return n.map(e, t, o, 0, 1);
    };
    n.sq = function (e) {
      return e * e;
    };
    n.fract = function (e) {
      return e - Math.floor(e);
    };
    n.degrees = function (e) {
      return (180 * e) / Math.PI;
    };
    n.radians = function (e) {
      return (e * Math.PI) / 180;
    };
    n.abs = Math.abs;
    n.ceil = Math.ceil;
    n.exp = Math.exp;
    n.floor = Math.floor;
    n.log = Math.log;
    n.mag = Math.hypot;
    n.max = Math.max;
    n.min = Math.min;
    n.round = Math.round;
    n.sqrt = Math.sqrt;
    n.sin = Math.sin;
    n.cos = Math.cos;
    n.tan = Math.tan;
    n.asin = Math.asin;
    n.acos = Math.acos;
    n.atan = Math.atan;
    n.atan2 = Math.atan2;
    n.Vector = function (e, t, o) {
      let a = this;
      (a.x = e || 0), (a.y = t || 0), (a.z = o || 0);
      let r = null,
        i = null;
      function l(e, t, n) {
        return null != e.x
          ? e
          : null != t
          ? { x: e, y: t, z: n || 0 }
          : { x: e, y: e, z: e };
      }
      function u() {
        null == i &&
          ((i = a.x * a.x + a.y * a.y + a.z * a.z), (r = Math.sqrt(i)));
      }
      function s() {
        (i = null), (r = null);
      }
      (a.set = function (e, t, n) {
        (a.x = e || 0), (a.y = t || 0), (a.z = n || 0);
      }),
        (a.copy = function () {
          return new n.Vector(a.x, a.y, a.z);
        }),
        (a.add = function () {
          let e = l.apply(null, arguments);
          return (a.x += e.x), (a.y += e.y), (a.z += e.z), s(), a;
        }),
        (a.rem = function () {
          let e = l.apply(null, arguments);
          return (a.x %= e.x), (a.y %= e.y), (a.z %= e.z), s(), a;
        }),
        (a.sub = function () {
          let e = l.apply(null, arguments);
          return (a.x -= e.x), (a.y -= e.y), (a.z -= e.z), s(), a;
        }),
        (a.mult = function () {
          let e = l.apply(null, arguments);
          return (a.x *= e.x), (a.y *= e.y), (a.z *= e.z), s(), a;
        }),
        (a.div = function () {
          let e = l.apply(null, arguments);
          return (a.x /= e.x), (a.y /= e.y), (a.z /= e.z), s(), a;
        }),
        (a.mag = function () {
          return u(), r;
        }),
        (a.magSq = function () {
          return u(), i;
        }),
        (a.dot = function () {
          let e = l.apply(null, arguments);
          return a.x * e.x + a.y * e.y + a.z * e.z;
        }),
        (a.dist = function () {
          let e = l.apply(null, arguments),
            t = a.x - e.x,
            n = a.y - e.y,
            o = a.z - e.z;
          return Math.sqrt(t * t + n * n + o * o);
        }),
        (a.cross = function () {
          let e = l.apply(null, arguments),
            t = a.y * e.z - a.z * e.y,
            n = a.z * e.x - a.x * e.z,
            o = a.x * e.y - a.y * e.x;
          return (a.x = t), (a.y = n), (a.z = o), s(), a;
        }),
        (a.normalize = function () {
          u();
          let e = r;
          return (a.x /= e), (a.y /= e), (a.z /= e), (r = 1), (i = 1), a;
        }),
        (a.limit = function (e) {
          u();
          let t = r;
          if (t > e) {
            let n = e / t;
            (a.x *= n), (a.y *= n), (a.z *= n), (r = e), (i = e * e);
          }
          return a;
        }),
        (a.setMag = function (e) {
          u();
          let t = r,
            n = e / t;
          return (a.x *= n), (a.y *= n), (a.z *= n), (r = e), (i = e * e), a;
        }),
        (a.heading = function () {
          return Math.atan2(a.y, a.x);
        }),
        (a.rotate = function (e) {
          let t = Math.cos(e),
            n = Math.sin(e),
            o = a.x * t - a.y * n,
            r = a.x * n + a.y * t;
          return (a.x = o), (a.y = r), a;
        }),
        (a.angleBetween = function () {
          let e = l.apply(null, arguments);
          const t = a.dot(e) / (a.mag() * e.mag());
          let n;
          return (
            (n = Math.acos(Math.min(1, Math.max(-1, t)))),
            (n *= Math.sign(a.cross(e).z || 1))
          );
        }),
        (a.lerp = function (e, t) {
          return (
            (a.x = a.x * (1 - t) + e.x * t),
            (a.y = a.y * (1 - t) + e.y * t),
            (a.z = a.z * (1 - t) + e.z * t),
            s(),
            a
          );
        }),
        (a.reflect = function (e) {
          return e.normalize(), a.sub(e.mult(2 * a.dot(e)));
        }),
        (a.array = function () {
          return [a.x, a.y, a.z];
        }),
        (a.equals = function (e, t) {
          return (
            null == t && null == (t = Number.EPSILON) && (t = 0),
            Math.abs(e.x - a.x) < t &&
              Math.abs(e.y - a.y) < t &&
              Math.abs(e.z - a.z) < t
          );
        }),
        (a.fromAngle = function (e, t) {
          return (
            null == t && (t = 1),
            (r = t),
            (i = t * t),
            (a.x = t * Math.cos(e)),
            (a.y = t * Math.sin(e)),
            (a.z = 0),
            a
          );
        }),
        (a.fromAngles = function (e, t, n) {
          null == n && (n = 1), (r = n), (i = n * n);
          const o = Math.cos(t),
            l = Math.sin(t),
            u = Math.cos(e),
            s = Math.sin(e);
          return (a.x = n * s * l), (a.y = -n * u), (a.z = n * s * o), a;
        }),
        (a.random2D = function () {
          return (r = 1), (i = 1), a.fromAngle(Math.random() * Math.PI * 2);
        }),
        (a.random3D = function () {
          return (
            (r = 1),
            (i = 1),
            a.fromAngles(
              Math.random() * Math.PI * 2,
              Math.random() * Math.PI * 2
            )
          );
        }),
        (a.toString = function () {
          return `[${a.x}, ${a.y}, ${a.z}]`;
        });
    };
    n.Vector.add = function (e, t) {
      return new n.Vector(e.x + t.x, e.y + t.y, e.z + t.z);
    };
    n.Vector.rem = function (e, t) {
      return new n.Vector(e.x % t.x, e.y % t.y, e.z % t.z);
    };
    n.Vector.sub = function (e, t) {
      return new n.Vector(e.x - t.x, e.y - t.y, e.z - t.z);
    };
    n.Vector.mult = function (e, t) {
      return null == t.x
        ? new n.Vector(e.x * t, e.y * t, e.z * t)
        : new n.Vector(e.x * t.x, e.y * t.y, e.z * t.z);
    };
    n.Vector.div = function (e, t) {
      return null == t.x
        ? new n.Vector(e.x / t, e.y / t, e.z / t)
        : new n.Vector(e.x / t.x, e.y / t.y, e.z / t.z);
    };
    n.Vector.dist = function (e, t) {
      return Math.hypot(e.x - t.x, e.y - t.y, e.z - t.z);
    };
    n.Vector.cross = function (e, t) {
      return new n.Vector(
        e.y * t.z - e.z * t.y,
        e.z * t.x - e.x * t.z,
        e.x * t.y - e.y * t.x
      );
    };
    n.Vector.lerp = function (e, t, o) {
      return new n.Vector(
        e.x * (1 - o) + t.x * o,
        (e.y = e.y * (1 - o) + t.y * o),
        (e.z = e.z * (1 - o) + t.z * o)
      );
    };
    n.Vector.equals = function (e, t, n) {
      return e.equals(t, n);
    };
    for (let e of ["fromAngle", "fromAngles", "random2D", "random3D"])
      n.Vector[e] = function (t, o, a) {
        return new n.Vector()[e](t, o, a);
      };
    n.createVector = function (e, t, o) {
      return new n.Vector(e, t, o);
    };
    n.curvePoint = function (e, t, n, o, a) {
      const r = a * a * a,
        i = a * a,
        l = -0.5 * r + i - 0.5 * a,
        u = 1.5 * r - 2.5 * i + 1,
        s = -1.5 * r + 2 * i + 0.5 * a,
        c = 0.5 * r - 0.5 * i;
      return e * l + t * u + n * s + o * c;
    };
    n.bezierPoint = function (e, t, n, o, a) {
      const r = 1 - a;
      return (
        Math.pow(r, 3) * e +
        3 * Math.pow(r, 2) * a * t +
        3 * r * Math.pow(a, 2) * n +
        Math.pow(a, 3) * o
      );
    };
    n.curveTangent = function (e, t, n, o, a) {
      const r = a * a,
        i = (-3 * r) / 2 + 2 * a - 0.5,
        l = (9 * r) / 2 - 5 * a,
        u = (-9 * r) / 2 + 4 * a + 0.5,
        s = (3 * r) / 2 - a;
      return e * i + t * l + n * u + o * s;
    };
    n.bezierTangent = function (e, t, n, o, a) {
      const r = 1 - a;
      return (
        3 * o * Math.pow(a, 2) -
        3 * n * Math.pow(a, 2) +
        6 * n * r * a -
        6 * t * r * a +
        3 * t * Math.pow(r, 2) -
        3 * e * Math.pow(r, 2)
      );
    };
    function p(e, t, n) {
      let o, a, r, i, l, u, s, c, h;
      if (0 == t) return [255 * (o = n), 255 * (a = n), 255 * (r = n)];
      switch (
        ((i = e) > 360 && (i = 0),
        (s = n * (1 - t)),
        (c = n * (1 - t * (u = (i /= 60) - (l = ~~i)))),
        (h = n * (1 - t * (1 - u))),
        l)
      ) {
        case 0:
          (o = n), (a = h), (r = s);
          break;
        case 1:
          (o = c), (a = n), (r = s);
          break;
        case 2:
          (o = s), (a = n), (r = h);
          break;
        case 3:
          (o = s), (a = c), (r = n);
          break;
        case 4:
          (o = h), (a = s), (r = n);
          break;
        default:
          (o = n), (a = s), (r = c);
      }
      return [255 * o, 255 * a, 255 * r];
    }
    n.Color = function (e, t, n, o) {
      let a = this;
      (a.MAGIC = 786698),
        (a._r = e),
        (a._g = t),
        (a._b = n),
        (a._a = o),
        (a._h = 0),
        (a._s = 0),
        (a._v = 0),
        (a._hsvInferred = !1),
        (a.setRed = function (e) {
          (a._r = e), (a._hsvInferred = !1);
        }),
        (a.setGreen = function (e) {
          (a._g = e), (a._hsvInferred = !1);
        }),
        (a.setBlue = function (e) {
          (a._b = e), (a._hsvInferred = !1);
        }),
        (a.setAlpha = function (e) {
          (a._a = e / 255), (a._hsvInferred = !1);
        }),
        (a._inferHSV = function () {
          a._hsvInferred ||
            (([a._h, a._s, a._v] = (function (e, t, n) {
              let o, a, r, i, l;
              if (
                ((o = e < t ? (e < n ? e : n) : t < n ? t : n),
                0 ==
                  (l =
                    (100 * (a = e > t ? (e > n ? e : n) : t > n ? t : n)) /
                    255))
              )
                return [(r = 0), (i = 0), l];
              if (0 == (i = (100 * (a - o)) / a)) return [(r = 0), i, l];
              r =
                a == e
                  ? 0 + (60 * (t - n)) / (a - o)
                  : a == t
                  ? 120 + (60 * (n - e)) / (a - o)
                  : 240 + (60 * (e - t)) / (a - o);
              return [r, i, l];
            })(a._r, a._g, a._b)),
            (a._hsvInferred = !0));
        }),
        (a.toString = function () {
          return `rgba(${Math.round(a._r)},${Math.round(a._g)},${Math.round(
            a._b
          )},${~~(1e3 * a._a) / 1e3})`;
        });
    };
    n.colorMode = function (e) {
      n._colorMode = e;
    };
    n.color = function () {
      if (1 == arguments.length && 786698 == arguments[0].MAGIC)
        return arguments[0];
      if (n._colorMode == n.RGB) {
        if (1 == arguments.length)
          return new n.Color(arguments[0], arguments[0], arguments[0], 1);
        if (2 == arguments.length)
          return new n.Color(
            arguments[0],
            arguments[0],
            arguments[0],
            arguments[1] / 255
          );
        if (3 == arguments.length)
          return new n.Color(arguments[0], arguments[1], arguments[2], 1);
        if (4 == arguments.length)
          return new n.Color(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3] / 255
          );
      } else {
        if (1 == arguments.length)
          return new n.Color(...p(0, 0, arguments[0] / 100), 1);
        if (2 == arguments.length)
          return new n.Color(
            ...p(0, 0, arguments[0] / 100),
            arguments[1] / 255
          );
        if (3 == arguments.length)
          return new n.Color(
            ...p(arguments[0], arguments[1] / 100, arguments[2] / 100),
            1
          );
        if (4 == arguments.length)
          return new n.Color(
            ...p(arguments[0], arguments[1] / 100, arguments[2] / 100),
            arguments[3]
          );
      }
      return null;
    };
    n.red = function (e) {
      return e._r;
    };
    n.green = function (e) {
      return e._g;
    };
    n.blue = function (e) {
      return e._b;
    };
    n.alpha = function (e) {
      return 255 * e._a;
    };
    n.hue = function (e) {
      return e._inferHSV(), e._h;
    };
    n.saturation = function (e) {
      return e._inferHSV(), e._s;
    };
    n.brightness = function (e) {
      return e._inferHSV(), e._v;
    };
    n.lightness = function (e) {
      return (100 * (0.2126 * e._r + 0.7152 * e._g + 0.0722 * e._b)) / 255;
    };
    n.lerpColor = function (e, t, o) {
      return n._colorMode == n.RGB
        ? new n.Color(
            n.constrain(n.lerp(e._r, t._r, o), 0, 255),
            n.constrain(n.lerp(e._g, t._g, o), 0, 255),
            n.constrain(n.lerp(e._b, t._b, o), 0, 255),
            n.constrain(n.lerp(e._a, t._a, o), 0, 1)
          )
        : (e._inferHSV(),
          t._inferHSV(),
          new n.Color(
            n.constrain(
              (function (e, t, o) {
                var a = [
                  [Math.abs(t - e), n.map(o, 0, 1, e, t)],
                  [Math.abs(t + 360 - e), n.map(o, 0, 1, e, t + 360)],
                  [Math.abs(t - 360 - e), n.map(o, 0, 1, e, t - 360)],
                ];
                return a.sort((e, t) => e[0] - t[0]), (a[0][1] + 720) % 360;
              })(e._h, t._h, o),
              0,
              360
            ),
            n.constrain(n.lerp(e._s, t._s, o), 0, 100),
            n.constrain(n.lerp(e._v, t._v, o), 0, 100),
            n.constrain(n.lerp(e._a, t._a, o), 0, 1)
          ));
    };
    function m() {
      (o.fillStyle = "white"),
        (o.strokeStyle = "black"),
        (o.lineCap = "round"),
        (o.lineJoin = "miter");
    }
    n.strokeWeight = function (e) {
      (n._noStroke = !1), (o.lineWidth = e);
    };
    n.stroke = function () {
      if (((n._noStroke = !1), "string" == typeof arguments[0]))
        return void (o.strokeStyle = arguments[0]);
      let e = n.color.apply(null, arguments);
      e._a <= 0 ? (n._noStroke = !0) : (o.strokeStyle = e);
    };
    n.noStroke = function () {
      n._noStroke = !0;
    };
    n.fill = function () {
      if (((n._noFill = !1), "string" == typeof arguments[0]))
        return void (o.fillStyle = arguments[0]);
      let e = n.color.apply(null, arguments);
      e._a <= 0 ? (n._noFill = !0) : (o.fillStyle = e);
    };
    n.noFill = function () {
      n._noFill = !0;
    };
    n.blendMode = function (e) {
      o.globalCompositeOperation = e;
    };
    n.strokeCap = function (e) {
      o.lineCap = e;
    };
    n.strokeJoin = function (e) {
      o.lineJoin = e;
    };
    n.ellipseMode = function (e) {
      n._ellipseMode = e;
    };
    n.rectMode = function (e) {
      n._rectMode = e;
    };
    n.curveDetail = function (e) {
      n._curveDetail = e;
    };
    n.curveAlpha = function (e) {
      n._curveAlpha = e;
    };
    n.curveTightness = function (e) {
      console.warn(
        "curveTightness() sets the 'alpha' parameter of Catmull-Rom curve, and is NOT identical to p5.js counterpart. As this might change in the future, please call curveAlpha() directly."
      ),
        (n._curveAlpha = e);
    };
    n.clear = function () {
      o.clearRect(0, 0, n.width, n.height);
    };
    n.background = function () {
      if (arguments[0] && arguments[0].MAGIC == n.MAGIC)
        return n.image(arguments[0], 0, 0, n.width, n.height);
      o.save(),
        o.resetTransform(),
        o.scale(n._pixelDensity, n._pixelDensity),
        "string" == typeof arguments[0]
          ? (o.fillStyle = arguments[0])
          : (o.fillStyle = n.color(...Array.from(arguments))),
        o.fillRect(0, 0, n.width, n.height),
        o.restore();
    };
    n.line = function (e, t, a, r) {
      n._noStroke ||
        (o.beginPath(), o.moveTo(e, t), o.lineTo(a, r), o.stroke());
    };
    function g(e) {
      if (0 <= e && e < 2 * Math.PI) return e;
      for (; e < 0; ) e += 2 * Math.PI;
      for (; e >= Math.PI; ) e -= 2 * Math.PI;
      return e;
    }
    function v(e, t, a, r, i, l, u, s) {
      if (n._noFill && n._noStroke) return;
      let c = g(i),
        h = g(l);
      o.beginPath();
      for (let i = 0; i < s + 1; i++) {
        let l = i / s,
          u = n.lerp(c, h, l),
          f = (Math.cos(u) * a) / 2,
          d = (Math.sin(u) * r) / 2;
        o[i ? "lineTo" : "moveTo"](e + f, t + d);
      }
      u == n.CHORD
        ? o.closePath()
        : u == n.PIE && (o.lineTo(e, t), o.closePath()),
        n._noFill || o.fill(),
        n._noStroke || o.stroke();
    }
    n.arc = function (e, t, o, a, r, i, l, u) {
      if (r == i) return n.ellipse(e, t, o, a);
      null == u && (u = 25),
        null == l && (l = n.PIE),
        n._ellipseMode == n.CENTER
          ? v(e, t, o, a, r, i, l, u)
          : n._ellipseMode == n.RADIUS
          ? v(e, t, 2 * o, 2 * a, r, i, l, u)
          : n._ellipseMode == n.CORNER
          ? v(e + o / 2, t + a / 2, o, a, r, i, l, u)
          : n._ellipseMode == n.CORNERS &&
            v((e + o) / 2, (t + a) / 2, o - e, a - t, r, i, l, u);
    };
    function M(e, t, a, r) {
      (n._noFill && n._noStroke) ||
        (o.beginPath(),
        o.ellipse(e, t, a / 2, r / 2, 0, 0, 2 * Math.PI),
        n._noFill || o.fill(),
        n._noStroke || o.stroke());
    }
    n.ellipse = function (e, t, o, a) {
      null == a && (a = o),
        n._ellipseMode == n.CENTER
          ? M(e, t, o, a)
          : n._ellipseMode == n.RADIUS
          ? M(e, t, 2 * o, 2 * a)
          : n._ellipseMode == n.CORNER
          ? M(e + o / 2, t + a / 2, o, a)
          : n._ellipseMode == n.CORNERS &&
            M((e + o) / 2, (t + a) / 2, o - e, a - t);
    };
    n.circle = function (e, t, o) {
      return n.ellipse(e, t, o, o);
    };
    n.point = function (e, t) {
      e.x && ((t = e.y), (e = e.x)),
        o.beginPath(),
        o.ellipse(e, t, 0.4, 0.4, 0, 0, 2 * Math.PI),
        o.stroke();
    };
    function _(e, t, a, r, i, l, u, s) {
      if (n._noFill && n._noStroke) return;
      if (null == i)
        return (function (e, t, a, r) {
          n._noFill || o.fillRect(e, t, a, r);
          n._noStroke || o.strokeRect(e, t, a, r);
        })(e, t, a, r);
      if (null == l) return _(e, t, a, r, i, i, i, i);
      const c = Math.min(Math.abs(r), Math.abs(a)) / 2;
      (i = Math.min(c, i)),
        (l = Math.min(c, l)),
        (s = Math.min(c, s)),
        (u = Math.min(c, u)),
        o.beginPath(),
        o.moveTo(e + i, t),
        o.arcTo(e + a, t, e + a, t + r, l),
        o.arcTo(e + a, t + r, e, t + r, u),
        o.arcTo(e, t + r, e, t, s),
        o.arcTo(e, t, e + a, t, i),
        o.closePath(),
        n._noFill || o.fill(),
        n._noStroke || o.stroke();
    }
    n.rect = function (e, t, o, a, r, i, l, u) {
      n._rectMode == n.CENTER
        ? _(e - o / 2, t - a / 2, o, a, r, i, l, u)
        : n._rectMode == n.RADIUS
        ? _(e - o, t - a, 2 * o, 2 * a, r, i, l, u)
        : n._rectMode == n.CORNER
        ? _(e, t, o, a, r, i, l, u)
        : n._rectMode == n.CORNERS && _(e, t, o - e, a - t, r, i, l, u);
    };
    n.square = function (e, t, o, a, r, i, l) {
      return n.rect(e, t, o, o, a, r, i, l);
    };
    function x() {
      i = [];
    }
    n.beginShape = function () {
      x(), o.beginPath(), (r = !0);
    };
    n.beginContour = function () {
      o.closePath(), x(), (r = !0);
    };
    n.endContour = function () {
      x(), (r = !0);
    };
    n.vertex = function (e, t) {
      x(), r ? o.moveTo(e, t) : o.lineTo(e, t), (r = !1);
    };
    n.bezierVertex = function (e, t, n, a, r, i) {
      x(), o.bezierCurveTo(e, t, n, a, r, i);
    };
    n.quadraticVertex = function (e, t, n, a) {
      x(), o.quadraticCurveTo(e, t, n, a);
    };
    n.bezier = function (e, t, o, a, r, i, l, u) {
      n.beginShape(),
        n.vertex(e, t),
        n.bezierVertex(o, a, r, i, l, u),
        n.endShape();
    };
    n.triangle = function (e, t, o, a, r, i) {
      n.beginShape(),
        n.vertex(e, t),
        n.vertex(o, a),
        n.vertex(r, i),
        n.endShape(n.CLOSE);
    };
    n.quad = function (e, t, o, a, r, i, l, u) {
      n.beginShape(),
        n.vertex(e, t),
        n.vertex(o, a),
        n.vertex(r, i),
        n.vertex(l, u),
        n.endShape(n.CLOSE);
    };
    n.endShape = function (e) {
      x(),
        e && o.closePath(),
        n._noFill || o.fill(),
        n._noStroke || o.stroke(),
        n._noFill &&
          n._noStroke &&
          (o.save(), (o.fillStyle = "none"), o.fill(), o.restore());
    };
    n.curveVertex = function (e, t) {
      if ((i.push([e, t]), i.length < 4)) return;
      let a = i[i.length - 4],
        l = i[i.length - 3],
        u = i[i.length - 2],
        s = i[i.length - 1],
        c = (function (e, t, n, o, a, r, i, l, u, s) {
          function c(e, t, n, o, a, r) {
            let i = Math.pow(o - t, 2) + Math.pow(a - n, 2),
              l = Math.pow(i, 0.5 * r);
            return l + e;
          }
          let h = [],
            f = c(0, e, t, n, o, s),
            d = c(f, n, o, a, r, s),
            p = c(d, a, r, i, l, s);
          for (let s = 0; s < u; s++) {
            let c = f + (s / (u - 1)) * (d - f),
              m = [
                (f - c) / (f - 0),
                (c - 0) / (f - 0),
                (d - c) / (d - f),
                (c - f) / (d - f),
                (p - c) / (p - d),
                (c - d) / (p - d),
                (d - c) / (d - 0),
                (c - 0) / (d - 0),
                (p - c) / (p - f),
                (c - f) / (p - f),
              ];
            for (let e = 0; e < m.length; e += 2)
              isNaN(m[e]) && ((m[e] = 1), (m[e + 1] = 0)),
                isFinite(m[e]) ||
                  (m[e] > 0
                    ? ((m[e] = 1), (m[e + 1] = 0))
                    : ((m[e] = 0), (m[e + 1] = 1)));
            let g = e * m[0] + n * m[1],
              v = t * m[0] + o * m[1],
              M = n * m[2] + a * m[3],
              _ = o * m[2] + r * m[3],
              x = a * m[4] + i * m[5],
              y = r * m[4] + l * m[5],
              w = g * m[6] + M * m[7],
              R = v * m[6] + _ * m[7],
              I = M * m[8] + x * m[9],
              E = _ * m[8] + y * m[9],
              S = w * m[2] + I * m[3],
              C = R * m[2] + E * m[3];
            h.push([S, C]);
          }
          return h;
        })(...a, ...l, ...u, ...s, n._curveDetail, n._curveAlpha);
      for (let e = 0; e < c.length; e++)
        r ? o.moveTo(...c[e]) : o.lineTo(...c[e]), (r = !1);
    };
    n.curve = function (e, t, o, a, r, i, l, u) {
      n.beginShape(),
        n.curveVertex(e, t),
        n.curveVertex(o, a),
        n.curveVertex(r, i),
        n.curveVertex(l, u),
        n.endShape();
    };
    n.translate = function (e, t) {
      o.translate(e, t);
    };
    n.rotate = function (e) {
      o.rotate(e);
    };
    n.scale = function (e, t) {
      null == t && (t = e), o.scale(e, t);
    };
    n.applyMatrix = function (e, t, n, a, r, i) {
      o.transform(e, t, n, a, r, i);
    };
    n.shearX = function (e) {
      o.transform(1, 0, Math.tan(e), 1, 0, 0);
    };
    n.shearY = function (e) {
      o.transform(1, Math.tan(e), 0, 1, 0, 0);
    };
    n.resetMatrix = function () {
      o.resetTransform(), o.scale(n._pixelDensity, n._pixelDensity);
    };
    n.pushMatrix = n.push = function () {
      o.save();
    };
    n.popMatrix = n.pop = function () {
      o.restore();
    };
    n.image = function (e, t, a, r, i, l, u, s, c) {
      let h = e.MAGIC == n.MAGIC ? e.canvas : e;
      function d() {
        if (e.MAGIC != n.MAGIC || !n._tint) return;
        let t = e.canvas.getContext("2d");
        t.save(),
          t.resetTransform(),
          t.clearRect(0, 0, t.canvas.width, t.canvas.height),
          t.drawImage(f.canvas, 0, 0),
          t.restore();
      }
      return (
        e.MAGIC == n.MAGIC &&
          null != n._tint &&
          (!(function (e, t) {
            null == f &&
              (f = document.createElement("canvas").getContext("2d"));
            null == e && ((e = o.canvas.width), (t = o.canvas.height));
            (f.canvas.width == e && f.canvas.height == t) ||
              ((f.canvas.width = e), (f.canvas.height = t));
          })(e.canvas.width, e.canvas.height),
          f.drawImage(e.canvas, 0, 0),
          e.tinted(n._tint)),
        r
          ? l
            ? (s || (s = h.width),
              c || (c = h.height),
              o.drawImage(h, l, u, s, c, t, a, r, i),
              void d())
            : (o.drawImage(h, t, a, r, i), void d())
          : (e.MAGIC == n.MAGIC || e.width
              ? o.drawImage(h, t, a, e.width, e.height)
              : o.drawImage(h, t, a, e.videoWidth, e.videoHeight),
            void d())
      );
    };
    n.loadPixels = function () {
      (l = o.getImageData(0, 0, n.canvas.width, n.canvas.height)),
        (n.pixels = l.data);
    };
    n.updatePixels = function () {
      null != l && o.putImageData(l, 0, 0);
    };
    n.loadImage = function (e, t) {
      u++;
      let o = n.createGraphics(100, 100),
        a = o.canvas.getContext("2d"),
        r = new Image();
      return (
        (r.src = e),
        (r.crossOrigin = "Anonymous"),
        (r.onload = function () {
          (a.canvas.width = r.width),
            (a.canvas.height = r.height),
            (o.width = r.width),
            (o.height = r.height),
            a.drawImage(r, 0, 0),
            u--,
            t && t(o);
        }),
        o
      );
    };
    let y = {};
    y[n.THRESHOLD] = function (e, t) {
      null == t ? (t = 127.5) : (t *= 255);
      for (let n = 0; n < e.length; n += 4) {
        const o = 0.2126 * e[n] + 0.7152 * e[n + 1] + 0.0722 * e[n + 2];
        e[n] = e[n + 1] = e[n + 2] = o >= t ? 255 : 0;
      }
    };
    y[n.GRAY] = function (e) {
      for (let t = 0; t < e.length; t += 4) {
        const n = 0.2126 * e[t] + 0.7152 * e[t + 1] + 0.0722 * e[t + 2];
        e[t] = e[t + 1] = e[t + 2] = n;
      }
    };
    y[n.OPAQUE] = function (e) {
      for (let t = 0; t < e.length; t += 4) e[t + 3] = 255;
    };
    y[n.INVERT] = function (e) {
      for (let t = 0; t < e.length; t += 4)
        (e[t] = 255 - e[t]),
          (e[t + 1] = 255 - e[t + 1]),
          (e[t + 2] = 255 - e[t + 2]);
    };
    y[n.POSTERIZE] = function (e, t) {
      let n = t - 1;
      for (let o = 0; o < e.length; o += 4)
        (e[o] = (255 * ((e[o] * t) >> 8)) / n),
          (e[o + 1] = (255 * ((e[o + 1] * t) >> 8)) / n),
          (e[o + 2] = (255 * ((e[o + 2] * t) >> 8)) / n);
    };
    y[n.DILATE] = function (e) {
      R(), d.set(e);
      let [t, n] = [o.canvas.width, o.canvas.height];
      for (let o = 0; o < n; o++)
        for (let a = 0; a < t; a++) {
          let r = 4 * Math.max(a - 1, 0),
            i = 4 * Math.min(a + 1, t - 1),
            l = 4 * Math.max(o - 1, 0) * t,
            u = 4 * Math.min(o + 1, n - 1) * t,
            s = 4 * o * t,
            c = 4 * a;
          for (let t = 0; t < 4; t++) {
            let n = t + l,
              o = t + u,
              a = t + s;
            e[s + c + t] = Math.max(
              d[n + c],
              d[a + r],
              d[a + c],
              d[a + i],
              d[o + c]
            );
          }
        }
    };
    y[n.ERODE] = function (e) {
      R(), d.set(e);
      let [t, n] = [o.canvas.width, o.canvas.height];
      for (let o = 0; o < n; o++)
        for (let a = 0; a < t; a++) {
          let r = 4 * Math.max(a - 1, 0),
            i = 4 * Math.min(a + 1, t - 1),
            l = 4 * Math.max(o - 1, 0) * t,
            u = 4 * Math.min(o + 1, n - 1) * t,
            s = 4 * o * t,
            c = 4 * a;
          for (let t = 0; t < 4; t++) {
            let n = t + l,
              o = t + u,
              a = t + s;
            e[s + c + t] = Math.min(
              d[n + c],
              d[a + r],
              d[a + c],
              d[a + i],
              d[o + c]
            );
          }
        }
    };
    y[n.BLUR] = function (e, t) {
      (t = t || 1), (t = Math.floor(t * n._pixelDensity)), R(), d.set(e);
      let a = 2 * t + 1;
      let r = (function (e) {
          let n = new Float32Array(e),
            o = 0.3 * t + 0.8,
            a = o * o * 2;
          for (let t = 0; t < e; t++) {
            let r = t - e / 2,
              i = Math.exp((-r * r) / a) / (2.5066282746 * o);
            n[t] = i;
          }
          return n;
        })(a),
        [i, l] = [o.canvas.width, o.canvas.height];
      for (let n = 0; n < l; n++)
        for (let o = 0; o < i; o++) {
          let l = 0,
            u = 0,
            s = 0,
            c = 0;
          for (let e = 0; e < a; e++) {
            let a = Math.min(Math.max(o - t + e, 0), i - 1),
              h = 4 * (n * i + a);
            (l += d[h] * r[e]),
              (u += d[h + 1] * r[e]),
              (s += d[h + 2] * r[e]),
              (c += d[h + 3] * r[e]);
          }
          let h = 4 * (n * i + o);
          (e[h] = l), (e[h + 1] = u), (e[h + 2] = s), (e[h + 3] = c);
        }
      d.set(e);
      for (let n = 0; n < l; n++)
        for (let o = 0; o < i; o++) {
          let u = 0,
            s = 0,
            c = 0,
            h = 0;
          for (let e = 0; e < a; e++) {
            let a = Math.min(Math.max(n - t + e, 0), l - 1),
              f = 4 * (a * i + o);
            (u += d[f] * r[e]),
              (s += d[f + 1] * r[e]),
              (c += d[f + 2] * r[e]),
              (h += d[f + 3] * r[e]);
          }
          let f = 4 * (n * i + o);
          (e[f] = u), (e[f + 1] = s), (e[f + 2] = c), (e[f + 3] = h);
        }
    };
    function w(e, t) {
      null == h && (h = document.createElement("canvas").getContext("2d")),
        null == e && ((e = o.canvas.width), (t = o.canvas.height)),
        (h.canvas.width == e && h.canvas.height == t) ||
          ((h.canvas.width = e), (h.canvas.height = t));
    }
    function R() {
      let e = o.canvas.width * o.canvas.height * 4;
      (null != d && e == d.length) || (d = new Uint8ClampedArray(e));
    }
    function I(e) {
      h.clearRect(0, 0, h.canvas.width, h.canvas.height),
        (h.filter = e),
        h.drawImage(o.canvas, 0, 0),
        o.save(),
        o.resetTransform(),
        o.clearRect(0, 0, o.canvas.width, o.canvas.height),
        o.drawImage(h.canvas, 0, 0),
        o.restore();
    }
    n.filter = function (e, t) {
      let a = n.HARDWARE_FILTERS && null != o.filter;
      if (a)
        if ((w(), e == n.THRESHOLD)) {
          null == t && (t = 0.5), (t = Math.max(t, 1e-5));
          let e = Math.floor((0.5 / t) * 100);
          I(`saturate(0%) brightness(${e}%) contrast(1000000%)`);
        } else if (e == n.GRAY) I("saturate(0%)");
        else if (e == n.OPAQUE)
          (h.fillStyle = "black"),
            h.fillRect(0, 0, h.canvas.width, h.canvas.height),
            h.drawImage(o.canvas, 0, 0),
            o.save(),
            o.resetTransform(),
            o.drawImage(h.canvas, 0, 0),
            o.restore();
        else if (e == n.INVERT) I("invert(100%)");
        else if (e == n.BLUR)
          I(`blur(${Math.ceil((t * n._pixelDensity) / 1) || 1}px)`);
        else {
          let n = o.getImageData(0, 0, o.canvas.width, o.canvas.height);
          y[e](n.data, t), o.putImageData(n, 0, 0);
        }
      else {
        let n = o.getImageData(0, 0, o.canvas.width, o.canvas.height);
        y[e](n.data, t), o.putImageData(n, 0, 0);
      }
    };
    n.resize = function (e, t) {
      w(),
        h.drawImage(o.canvas, 0, 0),
        (n.width = e),
        (n.height = t),
        (o.canvas.width = e * n._pixelDensity),
        (o.canvas.height = t * n._pixelDensity),
        o.save(),
        o.resetTransform(),
        o.clearRect(0, 0, o.canvas.width, o.canvas.height),
        o.drawImage(h.canvas, 0, 0, o.canvas.width, o.canvas.height),
        o.restore();
    };
    n.get = function (e, t, a, r) {
      if (null != e && null == a) {
        let a = o.getImageData(e, t, 1, 1).data;
        return new n.Color(a[0], a[1], a[2], a[3] / 255);
      }
      (e = e || 0), (t = t || 0), (a = a || n.width), (r = r || n.height);
      let i = n.createGraphics(a, r);
      i.pixelDensity(n._pixelDensity);
      let l = o.getImageData(
        e * n._pixelDensity,
        t * n._pixelDensity,
        a * n._pixelDensity,
        r * n._pixelDensity
      );
      return i.canvas.getContext("2d").putImageData(l, 0, 0), i;
    };
    n.set = function (e, t, a) {
      if (a.MAGIC == n.MAGIC) {
        let o = n._tint;
        return (n._tint = null), n.image(a, e, t), void (n._tint = o);
      }
      let r = 4 * (t * n._pixelDensity * o.canvas.width + e * n._pixelDensity);
      (n.pixels[r] = a._r),
        (n.pixels[r + 1] = a._g),
        (n.pixels[r + 2] = a._b),
        (n.pixels[r + 3] = 255 * a._a);
    };
    n.tinted = function () {
      let e = n.color(...Array.from(arguments)),
        t = e._a;
      (e._a = 1),
        w(),
        h.clearRect(0, 0, h.canvas.width, h.canvas.height),
        (h.fillStyle = e),
        h.fillRect(0, 0, h.canvas.width, h.canvas.height),
        (h.globalCompositeOperation = "multiply"),
        h.drawImage(o.canvas, 0, 0),
        (h.globalCompositeOperation = "source-over"),
        o.save(),
        o.resetTransform();
      let a = o.globalCompositeOperation;
      (o.globalCompositeOperation = "source-in"),
        o.drawImage(h.canvas, 0, 0),
        (o.globalCompositeOperation = a),
        o.restore(),
        (h.globalAlpha = t),
        h.clearRect(0, 0, h.canvas.width, h.canvas.height),
        h.drawImage(o.canvas, 0, 0),
        (h.globalAlpha = 1),
        o.save(),
        o.resetTransform(),
        o.clearRect(0, 0, o.canvas.width, o.canvas.height),
        o.drawImage(h.canvas, 0, 0),
        o.restore();
    };
    n.tint = function () {
      n._tint = n.color(...Array.from(arguments));
    };
    n.noTint = function () {
      n._tint = null;
    };
    n.mask = function (e) {
      o.save(), o.resetTransform();
      let t = o.globalCompositeOperation;
      (o.globalCompositeOperation = "destination-in"),
        o.drawImage(e.canvas, 0, 0),
        (o.globalCompositeOperation = t),
        o.restore();
    };
    n.clearTemporaryBuffers = function () {
      (h = null), (f = null), (d = null);
    };
    n.save = function (e, t) {
      (e = e || "untitled"), (t = t || "png");
      var n = document.createElement("a");
      (n.innerHTML = "[Download]"),
        n.addEventListener(
          "click",
          function () {
            (this.href = o.canvas.toDataURL()), (this.download = e + "." + t);
          },
          !1
        ),
        document.body.appendChild(n),
        n.click(),
        document.body.removeChild(n);
    };
    n.saveCanvas = function (e, t, o) {
      if (e.MAGIC == n.MAGIC) {
        o && e.save(t, o);
        let n = t.split(".");
        return e.save(n.slice(0, -1).join("."), n[n.length - 1]);
      }
      if (t) return n.save(e, t);
      let a = e.split(".");
      return n.save(a.slice(0, -1).join("."), a[a.length - 1]);
    };
    n.loadFont = function (e, t) {
      let n = e.split("/"),
        o = n[n.length - 1].split(".")[0].replace(" ", ""),
        a = `@font-face {\n        font-family: '${o}';\n        src: url('${e}');\n      }`;
      const r = document.createElement("style");
      return (r.textContent = a), document.head.append(r), o;
    };
    n.textFont = function (e) {
      n._textFont = e;
    };
    n.textSize = function (e) {
      (n._textSize = e), (n._textLeading = e);
    };
    n.textLeading = function (e) {
      n._textLeading = e;
    };
    n.textStyle = function (e) {
      n._textStyle = e;
    };
    n.textAlign = function (e, t) {
      (o.textAlign = e), t && (o.textBaseline = t == n.CENTER ? "middle" : t);
    };
    n.text = function (e, t, a, r) {
      if (!e) return;
      if (((e = e.toString()), n._noFill && n._noStroke)) return;
      o.font = `${n._textStyle} ${n._textSize}px ${n._textFont}`;
      let i = e.split("\n");
      for (let e = 0; e < i.length; e++)
        n._noFill || o.fillText(i[e], t, a, r),
          n._noStroke || o.strokeText(i[e], t, a, r),
          (a += n._textLeading);
    };
    n.textWidth = function (e) {
      return (
        (o.font = `${n._textStyle} ${n._textSize}px ${n._textFont}`),
        o.measureText(e).width
      );
    };
    n.textAscent = function (e) {
      return (
        (o.font = `${n._textStyle} ${n._textSize}px ${n._textFont}`),
        o.measureText(e).actualBoundingBoxAscent
      );
    };
    n.textDescent = function (e) {
      return (
        (o.font = `${n._textStyle} ${n._textSize}px ${n._textFont}`),
        o.measureText(e).actualBoundingBoxDescent
      );
    };
    var E = 4;
    var S = 0.5;
    var C = function (e) {
      return 0.5 * (1 - Math.cos(e * Math.PI));
    };
    var A;
    n.noise = function (e, t, n) {
      if (((t = t || 0), (n = n || 0), null == A)) {
        A = new Array(4096);
        for (var o = 0; o < 4096; o++) A[o] = Math.random();
      }
      e < 0 && (e = -e), t < 0 && (t = -t), n < 0 && (n = -n);
      for (
        var a,
          r,
          i,
          l,
          u,
          s = Math.floor(e),
          c = Math.floor(t),
          h = Math.floor(n),
          f = e - s,
          d = t - c,
          p = n - h,
          m = 0,
          g = 0.5,
          v = 0;
        v < E;
        v++
      ) {
        var M = s + (c << 4) + (h << 8);
        (a = C(f)),
          (r = C(d)),
          (i = A[4095 & M]),
          (i += a * (A[(M + 1) & 4095] - i)),
          (l = A[(M + 16) & 4095]),
          (l += a * (A[(M + 16 + 1) & 4095] - l)),
          (i += r * (l - i)),
          (l = A[4095 & (M += 256)]),
          (l += a * (A[(M + 1) & 4095] - l)),
          (u = A[(M + 16) & 4095]),
          (u += a * (A[(M + 16 + 1) & 4095] - u)),
          (l += r * (u - l)),
          (i += C(p) * (l - i)),
          (m += i * g),
          (g *= S),
          (s <<= 1),
          (c <<= 1),
          (h <<= 1),
          (f *= 2) >= 1 && (s++, f--),
          (d *= 2) >= 1 && (c++, d--),
          (p *= 2) >= 1 && (h++, p--);
      }
      return m;
    };
    n.noiseDetail = function (e, t) {
      e > 0 && (E = e), t > 0 && (S = t);
    };
    const D = function () {
      let e,
        t,
        n = 4294967295;
      return {
        setSeed(o) {
          e = t = (null == o ? Math.random() * n : o) >>> 0;
        },
        getSeed: () => t,
        rand: () => ((e ^= e << 17), (e ^= e >> 13), ((e ^= e << 5) >>> 0) / n),
      };
    };
    let T = D();
    T.setSeed();
    n.noiseSeed = function (e) {
      let t = null == e ? 4294967295 * Math.random() : e;
      A || (A = new Float32Array(4096));
      for (var n = 0; n < 4096; n++)
        (t ^= t << 17),
          (t ^= t >> 13),
          (t ^= t << 5),
          (A[n] = (t >>> 0) / 4294967295);
    };
    n.randomSeed = function (e) {
      T.setSeed(e);
    };
    n.random = function (e, t) {
      return null == e
        ? T.rand()
        : "number" == typeof e
        ? null != t
          ? T.rand() * (t - e) + e
          : T.rand() * e
        : e[~~(e.length * T.rand())];
    };
    n.randomGenerator = function (e) {
      e == n.LCG
        ? (T = (function () {
            const e = 4294967296;
            let t, n;
            return {
              setSeed(o) {
                n = t = (null == o ? Math.random() * e : o) >>> 0;
              },
              getSeed: () => t,
              rand: () => (n = (1664525 * n + 1013904223) % e) / e,
            };
          })())
        : e == n.SHR3 && (T = D()),
        T.setSeed();
    };
    var P = new (function () {
      var e,
        t,
        n,
        o = new Array(128),
        a = new Array(256),
        r = new Array(128),
        i = new Array(128),
        l = new Array(256),
        u = new Array(256),
        s = function () {
          return 4294967296 * T.rand() - 2147483648;
        },
        c = function () {
          return 0.5 + 2.328306e-10 * (s() << 0);
        },
        h = function () {
          for (var t, a, l, u, h = 3.44262; ; ) {
            if (((t = n * r[e]), 0 == e)) {
              do {
                (l = c()),
                  (u = c()),
                  (t = 0.2904764 * -Math.log(l)),
                  (a = -Math.log(u));
              } while (a + a < t * t);
              return n > 0 ? h + t : -h - t;
            }
            if (i[e] + c() * (i[e - 1] - i[e]) < Math.exp(-0.5 * t * t))
              return t;
            if (((n = s()), (e = 127 & n), Math.abs(n) < o[e])) return n * r[e];
          }
        },
        f = function () {
          for (var n; ; ) {
            if (0 == e) return 7.69711 - Math.log(c());
            if (((n = t * l[e]), u[e] + c() * (u[e - 1] - u[e]) < Math.exp(-n)))
              return n;
            if ((t = s()) < a[(e = 255 & t)]) return t * l[e];
          }
        };
      (this.SHR3 = s),
        (this.UNI = c),
        (this.RNOR = function () {
          return (n = s()), (e = 127 & n), Math.abs(n) < o[e] ? n * r[e] : h();
        }),
        (this.REXP = function () {
          return (t = s() >>> 0) < o[(e = 255 & t)] ? t * l[e] : f();
        }),
        (this.zigset = function () {
          var e,
            t,
            n = 2147483648,
            s = 4294967296,
            c = 3.442619855899,
            h = c,
            f = 0.00991256303526217,
            d = 7.697117470131487,
            p = d,
            m = 0.003949659822581572;
          for (
            e = f / Math.exp(-0.5 * c * c),
              o[0] = Math.floor((c / e) * n),
              o[1] = 0,
              r[0] = e / n,
              r[127] = c / n,
              i[0] = 1,
              i[127] = Math.exp(-0.5 * c * c),
              t = 126;
            t >= 1;
            t--
          )
            (c = Math.sqrt(-2 * Math.log(f / c + Math.exp(-0.5 * c * c)))),
              (o[t + 1] = Math.floor((c / h) * n)),
              (h = c),
              (i[t] = Math.exp(-0.5 * c * c)),
              (r[t] = c / n);
          for (
            e = m / Math.exp(-d),
              a[0] = Math.floor((d / e) * s),
              a[1] = 0,
              l[0] = e / s,
              l[255] = d / s,
              u[0] = 1,
              u[255] = Math.exp(-d),
              t = 254;
            t >= 1;
            t--
          )
            (d = -Math.log(m / d + Math.exp(-d))),
              (a[t + 1] = Math.floor((d / p) * s)),
              (p = d),
              (u[t] = Math.exp(-d)),
              (l[t] = d / s);
        });
    })();
    P.hasInit = !1;
    n.randomGaussian = function (e, t) {
      return P.hasInit || (P.zigset(), (P.hasInit = !0)), P.RNOR() * t + e;
    };
    n.randomExponential = function () {
      return P.hasInit || (P.zigset(), (P.hasInit = !0)), P.REXP();
    };
    n.print = console.log;
    n.cursor = function (e, t, o) {
      let a = "";
      e.includes(".") && ((e = `url("${e}")`), (a = ", auto")),
        null != t && (e += " " + t + " " + o),
        (n.canvas.style.cursor = e + a);
    };
    n.noCursor = function () {
      n.canvas.style.cursor = "none";
    };
    n.createCapture = function (e) {
      var t = document.createElement("video");
      return (
        (t.playsinline = "playsinline"),
        (t.autoplay = "autoplay"),
        navigator.mediaDevices.getUserMedia(e).then(function (e) {
          t.srcObject = e;
        }),
        (t.style.position = "absolute"),
        (t.style.opacity = 1e-5),
        (t.style.zIndex = -1e3),
        document.body.appendChild(t),
        t
      );
    };
    let b = [
      "setup",
      "draw",
      "preload",
      "mouseMoved",
      "mousePressed",
      "mouseReleased",
      "mouseDragged",
      "mouseClicked",
      "keyPressed",
      "keyReleased",
      "keyTyped",
      "touchStarted",
      "touchEnded",
      "windowResized",
    ];
    for (let e of b) {
      let t = "_" + e + "Fn";
      (n[t] = function () {}),
        (n[t].isPlaceHolder = !0),
        n[e]
          ? (n[t] = n[e])
          : Object.defineProperty(n, e, {
              set: function (e) {
                n[t] = e;
              },
            });
    }
    n._deltaTimeFn = function () {
      (n.deltaTime = window.performance.now() - c),
        (c = window.performance.now());
    };
    function z() {
      n._noLoop ||
        (a =
          null == n._frameRate
            ? requestAnimationFrame(z)
            : setTimeout(z, 1e3 / n._frameRate)),
        x(),
        (r = !0),
        o.save(),
        n._deltaTimeFn(),
        n._drawFn(),
        o.restore(),
        n.frameCount++;
    }
    n.noLoop = function () {
      (n._noLoop = !0), (a = null);
    };
    n.loop = function () {
      (n._noLoop = !1), null == a && z();
    };
    n.redraw = function () {
      z();
    };
    n.frameRate = function (e = null) {
      if (e === null) return 1000 / n.deltaTime;
      n._frameRate = e;
    };
    setTimeout(function () {
      n._preloadFn(),
        (c = window.performance.now()),
        (function e() {
          if (u > 0) return setTimeout(e, 10);
          n._setupFn();
          z();
        })();
    }, 1);
    n.canvas.onmousemove = function (e) {
      (n.pmouseX = n.mouseX),
        (n.pmouseY = n.mouseY),
        (n.mouseX = e.offsetX),
        (n.mouseY = e.offsetY),
        n.mouseIsPressed ? n._mouseDraggedFn(e) : n._mouseMovedFn(e);
    };
    n.canvas.onmousedown = function (e) {
      (n.pmouseX = n.mouseX),
        (n.pmouseY = n.mouseY),
        (n.mouseX = e.offsetX),
        (n.mouseY = e.offsetY),
        (n.mouseIsPressed = !0),
        (n.mouseButton = [n.LEFT, n.CENTER, n.RIGHT][e.button]),
        n._mousePressedFn(e);
    };
    n.canvas.onmouseup = function (e) {
      (n.pmouseX = n.mouseX),
        (n.pmouseY = n.mouseY),
        (n.mouseX = e.offsetX),
        (n.mouseY = e.offsetY),
        (n.mouseIsPressed = !1),
        n._mouseReleasedFn(e);
    };
    n.canvas.onclick = function (e) {
      (n.pmouseX = n.mouseX),
        (n.pmouseY = n.mouseY),
        (n.mouseX = e.offsetX),
        (n.mouseY = e.offsetY),
        (n.mouseIsPressed = !0),
        n._mouseClickedFn(e),
        (n.mouseIsPressed = !1);
    };
    window.addEventListener("keydown", function (e) {
      (n.keyIsPressed = !0),
        (n.key = e.key),
        (n.keyCode = e.keyCode),
        (s[n.keyCode] = !0),
        n._keyPressedFn(e),
        1 == e.key.length && n._keyTypedFn(e);
    });
    window.addEventListener("keyup", function (e) {
      (n.keyIsPressed = !1),
        (n.key = e.key),
        (n.keyCode = e.keyCode),
        (s[n.keyCode] = !1),
        n._keyReleasedFn(e);
    });
    window.addEventListener("resize", function (e) {
      n._windowResizedFn(e);
    });
    n.keyIsDown = function (e) {
      return !!s[e];
    };
    function O(e) {
      const t = n.canvas.getBoundingClientRect(),
        o = n.canvas.scrollWidth / n.width || 1,
        a = n.canvas.scrollHeight / n.height || 1;
      return {
        x: (e.clientX - t.left) / o,
        y: (e.clientY - t.top) / a,
        id: e.identifier,
      };
    }
    function k() {
      return (
        n._touchStarted.isPlaceHolder &&
        n._touchMoved.isPlaceHolder &&
        n._touchEnded.isPlaceHolder
      );
    }
    n.canvas.ontouchstart = function (e) {
      (n.touches = e.touches.map(O)),
        k() &&
          ((n.pmouseX = n.mouseX),
          (n.pmouseY = n.mouseY),
          (n.mouseX = n.touches[0].x),
          (n.mouseY = n.touches[0].y),
          (n.mouseIsPressed = !0),
          (n.mouseButton = n.LEFT),
          n._mousePressedFn(e) || e.preventDefault()),
        n._touchStartedFn(e) || e.preventDefault();
    };
    n.canvas.ontouchmove = function (e) {
      (n.touches = e.touches.map(O)),
        k() &&
          ((n.pmouseX = n.mouseX),
          (n.pmouseY = n.mouseY),
          (n.mouseX = n.touches[0].x),
          (n.mouseY = n.touches[0].y),
          (n.mouseIsPressed = !0),
          (n.mouseButton = n.LEFT),
          n._mouseDraggedFn(e) || e.preventDefault()),
        n._touchMovedFn(e) || e.preventDefault();
    };
    n.canvas.ontouchend = n.canvas.ontouchcancel = function (e) {
      (n.touches = e.touches.map(O)),
        k() &&
          ((n.pmouseX = n.mouseX),
          (n.pmouseY = n.mouseY),
          (n.mouseX = n.touches[0].x),
          (n.mouseY = n.touches[0].y),
          (n.mouseIsPressed = !1),
          n._mouseReleasedFn(e) || e.preventDefault()),
        n._touchEndedFn(e) || e.preventDefault();
    };
    n.year = function () {
      return new Date().getFullYear();
    };
    n.day = function () {
      return new Date().getDay();
    };
    n.hour = function () {
      return new Date().getHours();
    };
    n.minute = function () {
      return new Date().getMinutes();
    };
    n.second = function () {
      return new Date().getSeconds();
    };
    n.millis = function () {
      return window.performance.now() - c;
    };
  })(e);
}