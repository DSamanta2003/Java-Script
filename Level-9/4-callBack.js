
      const callback = (arg) => {
        console.log(arg);
      }

      const loadScript = (srcE, callback) => {
        let sc = document.createElement("script");
        sc.src = srcE;
        sc.onload = () => callback("Harry");
        document.head.append(sc);
      }

      loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
        callback)