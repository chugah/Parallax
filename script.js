(function() {

  // sniff user agent for mobile
  var isMobile = false;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

  // data
  var PROJECTS = [     
    {
      name: 'RICK PLESTER',
      description: 'Debut Instrumental Studio Album',
      href: 'http://rickplester.com/rick-plester.htm',
      color: '#ffffff'
    },
    {
      name: 'Black Symphony IV',
      description: 'Self-titled 4th Studio Album',
      href: 'http://rickplester.com/black-symphony-iv.htm',
      color: '#ffffff'
    },
    {
      name: 'Black Symphony III',
      description: 'Sewing the Seeds of Destruction',
      href: 'http://rickplester.com/product-3.htm',
      color: '#ffffff'
    },
    {
      name: 'Black Symphony II',
      description: 'Tears of Blood',
      href: 'http://rickplester.com/product-2.htm',
      color: '#ffffff'
    },
    {
      name: 'Black Symphony I',
      description: 'Self-titled 1st Studio Album',
      href: 'http://rickplester.com/product-1.htm',
      color: '#ffffff'
    }
  ];
  var PRESENTATIONS = [
    {
      name: 'Jeff Buick',
      description: 'One Child - JBFM track',
      href: 'http://jeffbuick.com/books/18-one-child',
      color: '#ffffff'
    },
    {
      name: 'Killinger',
      description: 'Self-titled Studio Album',
      href: 'http://www.artistdirect.com/nad/store/artist/album/0,,7704374,00.html',
      color: '#ffffff'
    },
    {
      name: 'Deeper Blues',
      description: 'Dig the Hole',
      href: 'http://www.artistdirect.com/nad/store/artist/album/0,,4585640,00.html',
      color: '#ffffff'
    },
    {
      name: 'Krunk',
      description: 'Therupy',
      href: 'http://www.artistdirect.com/nad/store/artist/album/0,,3786134,00.html',
      color: '#ffffff'
    }
  ];

  // magic numbers
  var SCROLL_THROTTLE = 32;
  var NUM_LINES = 5;

  function throttle(fn, time) {
    var timer;

    return function() {
      if (timer) {
        return;
      }

      fn.apply(this, arguments);

      timer = setTimeout(function() {
        clearTimeout(timer);
        timer = undefined;
      }, time);
    };
  }

  var currentPreview;
  var sideProjects = document.querySelector('.side-projects');

  function showPreview(e) {
    var id = e.currentTarget.getAttribute('data-id');
    currentLink = e.currentTarget;
    currentPreview = document.querySelector('[data-preview="' + id + '"]');
    if (!currentPreview) {
      return;
    }

    currentPreview.classList.add('visible');
    sideProjects.classList.add('hovering');
  }

  function hidePreview(e) {
    if (!currentPreview) {
      return;
    }

    currentPreview.classList.remove('visible');
    sideProjects.classList.remove('hovering');
  }

  var previewFrame = document.querySelector('.preview-frame');

  function populateList(list, data, prefix) {
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      var li = document.createElement('li');
      li.innerHTML =
        '<a href="' + item.href + '" target="_blank" class="preview-link" data-color="' + item.color + '" data-id="' + prefix + i + '">' +
        '  <span class="list-name">' + item.name + '</span>' +
        '  <span class="list-detail">' + item.description + '</span>' +
        '</a>';
      list.appendChild(li);

      var preview = document.createElement('div');
      preview.setAttribute('class', 'preview-image');
      preview.setAttribute('data-preview', prefix + i);
      preview.style['background-image'] = 'url(' + item.image + ')';
      previewFrame.appendChild(preview);
    }
  }

  function setTransform(element, transform) {
    element.style['-webkit-transform'] = transform;
    element.style['-ms-transform'] = transform;
    element.style['transform'] = transform;
  }

  var projectsList = document.querySelector('.projects-list');
  populateList(projectsList, PROJECTS, 'e');

  var presentationList = document.querySelector('.presentation-list');
  populateList(presentationList, PRESENTATIONS, 'p');

  var previewLinks = document.querySelectorAll('.preview-link');
  for (var i = 0; i < previewLinks.length; i++) {
    previewLinks[i].addEventListener('mouseover', showPreview);
    previewLinks[i].addEventListener('mouseout', hidePreview);
  }

  // blinds
  var lines = document.querySelector('.lines');
  var allLines = [];
  for (var i = 0; i < NUM_LINES; i++) {
    var line = document.createElement('div');
    line.setAttribute('class', 'line');
    lines.appendChild(line);
    line.style.width = (5 + (Math.random() * 10)) + 'px';
    line.style.left = (-25 + (Math.random() * 150)) + '%';
    setTransform(line, 'rotate(45deg) scaleX(0)');
    allLines.push(line);
  }

  var onScroll = throttle(function() {
    var scrollTop = window.scrollY;
    var per = 0;
    var atTop = true;

    if (scrollTop < topOffset) {
      per = 1 - (scrollTop / topOffset) + .1;
    } else if (scrollTop + windowHeight > projectsTop) {
      per = (scrollTop + windowHeight - projectsTop) / (pageHeight - projectsTop) - .3;
    }

    // handle at top
    if (scrollTop > studioTop) {
      atTop = false;
    }
    portrait.classList.toggle('no-bg', !atTop);

    var detailsHidden = details.classList.contains('hidden');
    if (!atTop && !detailsHidden) {
      details.classList.add('hidden');
    } else if (atTop && detailsHidden) {
      details.classList.remove('hidden');
    }

    per = Math.min(per, 1);
    per = Math.max(per, 0);

    // portrait props
    portrait.style.opacity = atTop ? per : 1;
    var portraitScale = 1 + (per * .05);
    // cool but too much of a perf hit
    // setTransform(portrait, atTop ? 'scale3d(' + portraitScale + ', ' + portraitScale + ', ' + portraitScale + ')' : 'none');

    // lines
    var scale = 20 - (per * 20);
    for (var i = 0; i < allLines.length; i++) {
      var line = allLines[i];
      var x = 0;
      setTransform(line, 'rotate(45deg) scaleX(' + scale + ')');
    }
  }, SCROLL_THROTTLE);

  var details = document.querySelector('.details');
  var sponsor = document.querySelector('.sponsor');
  var portrait = document.querySelector('.portrait');
  var projects = document.querySelector('.side-projects');
  var footer = document.querySelector('footer');
  var studioSection = document.querySelector('.studio-section');
  var bioSection = document.querySelector('.bio');

  var windowHeight;
  var projectsTop;
  var projectsHeight;
  var projectsMiddle;
  var footerTop;
  var studioTop;
  var studioHeight;
  var bioTop;
  var bioHeight;
  var pageHeight;
  var topOffset;

  function handleResize() {
    windowHeight = window.innerHeight;
    projectsTop = projects.offsetTop;
    projectsHeight = projects.offsetHeight;
    projectsMiddle = projectsTop + (projectsHeight / 2);
    footerTop = footer.offsetTop;
    studioTop = studioSection.offsetTop;
    studioHeight = studioSection.offsetHeight;
    bioTop = bioSection.offsetTop;
    bioHeight = bioSection.offsetHeight;
    pageHeight = document.documentElement.scrollHeight;
    topOffset = studioTop - windowHeight;

    onScroll();
  }

  handleResize();
  document.addEventListener('resize', handleResize);

  if (!isMobile) {
    document.addEventListener('scroll', onScroll);
  }

  // copyright
  var copyrightYear = document.querySelector('.copyright .year');
  copyrightYear.textContent = new Date().getFullYear();

})();