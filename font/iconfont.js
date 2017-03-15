;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M917.17632 959.232c1.37216 3.84 2.4576 7.87456 2.4576 12.16512 0 20.29568-16.34304 36.49536-36.46464 36.49536L153.26208 1007.89248c-20.36736 0-36.62848-16.35328-36.62848-36.49536 0-4.32128 1.09568-8.32512 2.4576-12.16512l-2.28352 0c-0.12288-4.03456-0.17408-8.09984-0.17408-12.16512 0-167.13728 102.15424-310.3232 247.3984-370.7392-89.72288-52.89984-150.0672-150.25152-150.0672-261.91872C213.97504 146.3808 350.14656 10.24 518.144 10.24c168.01792 0 304.16896 136.192 304.16896 304.15872 0 111.68768-60.37504 209.01888-150.0672 261.91872 145.27488 60.44672 247.3984 203.63264 247.3984 370.7392 0 4.06528-0.07168 8.13056-0.16384 12.16512L917.17632 959.22176 917.17632 959.232zM749.312 314.39872c0-127.67232-103.46496-231.168-231.168-231.168-127.68256 0-231.168 103.46496-231.168 231.168 0 127.68256 103.46496 231.168 231.168 231.168C645.80608 545.56672 749.312 442.10176 749.312 314.39872L749.312 314.39872zM542.6688 618.56768l-49.05984 0c-167.8848 0-303.9744 136.15104-303.9744 303.9744L189.63456 934.912l656.9984 0 0-12.36992C846.6432 754.66752 710.52288 618.56768 542.6688 618.56768L542.6688 618.56768zM542.6688 618.56768"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jindanluntan" viewBox="0 0 1072 1024">' +
    '' +
    '<path d="M976.167779 880.931898C976.167779 880.931898 693.84101 880.931898 693.84101 880.931898 693.84101 880.931898 573.320003 1024 573.320003 1024 573.320003 1024 452.798996 880.931898 452.798996 880.931898 452.798996 880.931898 214.280732 880.931898 214.280732 880.931898 161.686717 880.931898 119.044851 838.290032 119.044851 785.696017 119.044851 785.696017 119.044851 214.280732 119.044851 214.280732 119.044851 161.686717 161.686717 119.044851 214.280732 119.044851 214.280732 119.044851 976.167779 119.044851 976.167779 119.044851 1028.761794 119.044851 1071.40366 161.686717 1071.40366 214.280732 1071.40366 214.280732 1071.40366 785.696017 1071.40366 785.696017 1071.40366 838.290032 1028.761794 880.931898 976.167779 880.931898ZM1023.785719 214.280732C1023.785719 187.97182 1002.476691 166.662792 976.167779 166.662792 976.167779 166.662792 214.280732 166.662792 214.280732 166.662792 187.97182 166.662792 166.662792 187.97182 166.662792 214.280732 166.662792 214.280732 166.662792 785.696017 166.662792 785.696017 166.662792 812.004929 187.97182 833.313958 214.280732 833.313958 214.280732 833.313958 484.488735 832.575879 484.488735 832.575879 484.488735 832.575879 573.320003 956.834895 573.320003 956.834895 573.320003 956.834895 662.151271 832.575879 662.151271 832.575879 662.151271 832.575879 976.167779 833.313958 976.167779 833.313958 1002.476691 833.313958 1023.785719 812.004929 1023.785719 785.696017 1023.785719 785.696017 1023.785719 214.280732 1023.785719 214.280732ZM833.313958 523.487828C807.005045 523.487828 785.696017 502.154991 785.696017 475.869888 785.696017 449.560976 807.005045 428.228138 833.313958 428.228138 859.62287 428.228138 880.931898 449.560976 880.931898 475.869888 880.931898 502.154991 859.62287 523.487828 833.313958 523.487828ZM595.224255 523.487828C568.915343 523.487828 547.606315 502.154991 547.606315 475.869888 547.606315 449.560976 568.915343 428.228138 595.224255 428.228138 621.533167 428.228138 642.842196 449.560976 642.842196 475.869888 642.842196 502.154991 621.533167 523.487828 595.224255 523.487828ZM357.134553 523.487828C330.825641 523.487828 309.516613 502.154991 309.516613 475.869888 309.516613 449.560976 330.825641 428.228138 357.134553 428.228138 383.443465 428.228138 404.752494 449.560976 404.752494 475.869888 404.752494 502.154991 383.443465 523.487828 357.134553 523.487828ZM809.504987 47.879839C809.052617 47.879839 808.671673 47.641749 808.219303 47.61794 808.219303 47.61794 95.235881 47.61794 95.235881 47.61794 68.926969 47.61794 47.61794 68.926969 47.61794 95.235881 47.61794 95.235881 47.61794 642.842196 47.61794 642.842196 47.61794 642.842196 47.570322 642.842196 47.570322 642.842196 47.40366 655.865703 36.856286 666.365458 23.80897 666.365458 10.761655 666.365458 0.214281 655.865703 0.047618 642.842196 0.047618 642.842196 0 642.842196 0 642.842196 0 642.842196 0 95.235881 0 95.235881 0 42.641866 42.641866 0 95.235881 0 95.235881 0 809.504987 0 809.504987 0 809.504987 0 809.504987 0.23809 809.504987 0.23809 822.647539 0.23809 833.313958 10.904508 833.313958 24.070869 833.313958 37.21342 822.647539 47.879839 809.504987 47.879839Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiekuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M61.44 542.72l28.672 0 0 286.72-28.672 0 0-286.72Z"  ></path>' +
    '' +
    '<path d="M616.0384 646.0416 346.2144 536.9856c-8.704-3.4816-17.6128-4.9152-26.2144-4.4032l0-0.1024-2.4576 0.3072c-1.536 0.1024-3.072 0.3072-4.608 0.6144L163.84 552.96l0 0 0 0 0 276.48 28.672 0L192.512 578.1504l130.9696-17.2032c3.584 0.1024 7.2704 0.8192 10.8544 2.2528l272.1792 109.9776c15.0528 6.0416 22.6304 22.4256 16.896 36.6592l0 0c-5.7344 14.1312-22.528 20.6848-37.5808 14.6432l-164.352-66.3552 0 30.9248 152.4736 61.5424c30.3104 12.288 64.4096-1.1264 76.0832-30.0032l0 0C661.6064 691.6096 646.4512 658.3296 616.0384 646.0416z"  ></path>' +
    '' +
    '<path d="M192.512 800.768l94.208 0 0 28.672-94.208 0 0-28.672Z"  ></path>' +
    '' +
    '<path d="M951.6032 604.16 951.6032 604.16c-22.6304-39.2192-72.704-52.6336-111.9232-30.0032L633.6512 693.1456l-5.7344 36.4544L854.016 599.04c25.4976-14.7456 58.0608-5.9392 72.704 19.456l0 0c14.7456 25.4976 5.9392 58.0608-19.456 72.704L623.5136 855.04c-11.6736 6.7584-24.7808 8.4992-36.9664 6.144l-2.7648 28.672c18.0224 2.9696 37.0688-0.1024 54.0672-9.9328l283.7504-163.84C960.8192 693.4528 974.2336 643.3792 951.6032 604.16z"  ></path>' +
    '' +
    '<path d="M583.68 889.856 286.72 829.44 286.72 800.768 586.752 861.184Z"  ></path>' +
    '' +
    '<path d="M409.6 292.864l368.64 0 0 28.672-368.64 0 0-28.672Z"  ></path>' +
    '' +
    '<path d="M409.6 395.264l368.64 0 0 28.672-368.64 0 0-28.672Z"  ></path>' +
    '' +
    '<path d="M579.584 296.96l28.672 0 0 266.24-28.672 0 0-266.24Z"  ></path>' +
    '' +
    '<path d="M579.581112 297.028567l152.054784-152.054784 20.273971 20.273971-152.054784 152.054784-20.273971-20.273971Z"  ></path>' +
    '' +
    '<path d="M588.021135 317.224704l-152.054784-152.054784 20.273971-20.273971 152.054784 152.054784-20.273971 20.273971Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1007.072 542.48 512.016 79.152 16.96 541.12c-9.68 9.04-10.224 24.24-1.168 33.92 9.04 9.68 24.24 10.224 33.92 1.168l462.272-431.36 462.288 432.672c4.64 4.336 10.528 6.48 16.4 6.48 6.4 0 12.8-2.544 17.52-7.6C1017.248 566.72 1016.752 551.536 1007.072 542.48zM856 552c-13.248 0-24 10.752-24 24l0 368L640 944 640 688 384 688l0 256L192 944 192 576c0-13.248-10.736-24-24-24S144 562.752 144 576l0 416 288 0L432 736l160 0 0 256 288 0L880 576C880 562.752 869.248 552 856 552zM688 208l144 0 0 128c0 13.264 10.752 24 24 24S880 349.264 880 336L880 160 688 160c-13.248 0-24 10.736-24 24S674.752 208 688 208z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)