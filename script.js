// PICS
let img1 = document.getElementById("beginning");
let img2 = document.createElement("img");
img2.src = "Sound.png";
let img3 = document.createElement("img");
img3.src = "Catcalling.png";
img3.id = "Catcallingpic";
let img4 = document.createElement("img");
img4.src = "Grenze.png";
let img5 = document.createElement("img");
img5.src = "Quizstart.png";
let img6 = document.createElement("img");
img6.src = "People.png";
let img7 = document.createElement("img");
img7.src = "task1.png";
img7.setAttribute("class", "tasks");
let img8 = document.createElement("img");
img8.src = "Answer1.png";
let img8_2 = document.createElement("img");
img8_2.src = "answertäter.png";
let img9 = document.createElement("img");
img9.src = "task1-2.png";
img9.setAttribute("class", "tasks");
let img10 = document.createElement("img");
img10.src = "People2.png";
let img11 = document.createElement("img");
img11.src = "task2.png";
img11.setAttribute("class", "tasks");
let img12 = document.createElement("img");
img12.src = "People-gone.png";
let img13 = document.createElement("img");
img13.src = "trauen.png";
let img14 = document.createElement("img");
img14.src = "People-help.png";
let img15 = document.createElement("img");
img15.src = "People-stop.png";
let img16 = document.createElement("img");
img16.src = "mutig.png";
let img17 = document.createElement("img");
img17.src = "People-afterhelp.png";
let img18 = document.createElement("img");
img18.src = "task3.png";
img18.setAttribute("class", "tasks");
let img18_2 = document.createElement("img");
img18_2.src = "task3.2.png";
img18_2.setAttribute("class", "tasks");
let img19 = document.createElement("img");
img19.src = "People-gethelp.png";
let img20 = document.createElement("img");
img20.src = "People-goaway.png";
let img21 = document.createElement("img");
img21.src = "task4.png";
img21.setAttribute("class", "tasks");
let img22 = document.createElement("img");
img22.src = "People-bystander.png";
let img23 = document.createElement("img");
img23.src = "fragen.png";
let img24 = document.createElement("img");
img24.src = "People-ignore.png";
let img25 = document.createElement("img");
img25.src = "People-mad.png";
let img26 = document.createElement("img");
img26.src = "People-away.png";
let img27 = document.createElement("img");
img27.src = "People-alone.png";
let img28 = document.createElement("img");
img28.src = "People-catcallagain.png";
let img29 = document.createElement("img");
img29.src = "task5.png";
img29.setAttribute("class", "tasks");
let img30 = document.createElement("img");
img30.src = "task5.2.png";
img30.setAttribute("class", "tasks");
let img31 = document.createElement("img");
img31.src = "People-alright.png";
let img32 = document.createElement("img");
img32.src = "People-fault.png";
let imgend = document.createElement("img");
imgend.src = "People-end.png";

// BUTTONS
let btnstart = document.getElementById("startbtn");
let btnsound = document.createElement("button");
btnsound.id = "soundan";
btnsound.innerHTML = "Sound an!";
btnsound.setAttribute("onclick", "startVid()");

let btncatcall1 = document.createElement("button");
btncatcall1.id = "catcalls";
btncatcall1.innerHTML = "nichts Schlimmes";
btncatcall1.setAttribute("onclick", "startVid2()");
let btncatcall2 = document.createElement("button");
btncatcall2.id = "catcalls2";
btncatcall2.innerHTML = "Catcalling";
btncatcall2.setAttribute("onclick", "startVid2()");

let btnquiz = document.createElement("button");
btnquiz.id = "quizstart";
btnquiz.innerHTML = "Okay";
btnquiz.setAttribute("onclick", "quizstart()");

// BUTTONS TASK 1
let btnanswer1 = document.createElement("button");
btnanswer1.id = "answer1";
btnanswer1.innerHTML = "Hola Chica! Geiler Arsch";
btnanswer1.setAttribute("onclick", "answer1()");
btnanswer1.setAttribute("class", "a1");
let btnanswer2 = document.createElement("button");
btnanswer2.id = "answer2";
btnanswer2.innerHTML = "*pfeifen*";
btnanswer2.setAttribute("onclick", "answer2()");
btnanswer2.setAttribute("class", "a2");
let btnanswer3 = document.createElement("button");
btnanswer3.id = "answer3";
btnanswer3.innerHTML = "Lecker, lecker.";
btnanswer3.setAttribute("onclick", "answer3()");
btnanswer3.setAttribute("class", "a3");

// BUTTONS TASK 2
let btnanswer4 = document.createElement("button");
btnanswer4.id = "answer4";
btnanswer4.innerHTML = "Hola Chica! Geiler Arsch";
btnanswer4.setAttribute("onclick", "answer1wg()");
btnanswer4.setAttribute("class", "a1");
let btnanswer5 = document.createElement("button");
btnanswer5.id = "answer5";
btnanswer5.innerHTML = "*pfeifen*";
btnanswer5.setAttribute("onclick", "answer2wg()");
btnanswer5.setAttribute("class", "a2");
let btnanswer6 = document.createElement("button");
btnanswer6.id = "answer6";
btnanswer6.innerHTML = "Lecker, lecker.";
btnanswer6.setAttribute("onclick", "answer3wg()");
btnanswer6.setAttribute("class", "a3");

// TASK 2 BETROFFENE
let btnanswer7 = document.createElement("button");
btnanswer7.id = "answer7";
btnanswer7.innerHTML = "*wegrennen*";
btnanswer7.setAttribute("onclick", "answer4()");
btnanswer7.setAttribute("class", "a1");
let btnanswer8 = document.createElement("button");
btnanswer8.id = "answer8";
btnanswer8.innerHTML = "*Hilfe-Geste*";
btnanswer8.setAttribute("onclick", "answer5()");
btnanswer8.setAttribute("class", "a2");
let btnanswer9 = document.createElement("button");
btnanswer9.id = "answer9";
btnanswer9.innerHTML = "Lass mich in Ruhe!";
btnanswer9.setAttribute("onclick", "answer6()");
btnanswer9.setAttribute("class", "a3");

// TASK 3 PASSANT
let btnanswer10 = document.createElement("button");
btnanswer10.id = "answer10";
btnanswer10.innerHTML = "Ist alles okay?";
btnanswer10.setAttribute("onclick", "answer7()");
btnanswer10.setAttribute("class", "a1");
let btnanswer11 = document.createElement("button");
btnanswer11.id = "answer11";
btnanswer11.innerHTML = "*ignorieren*";
btnanswer11.setAttribute("onclick", "answer8()");
btnanswer11.setAttribute("class", "a2");
let btnanswer12 = document.createElement("button");
btnanswer12.id = "answer12";
btnanswer12.innerHTML = "*wegschauen*";
btnanswer12.setAttribute("onclick", "answer9()");
btnanswer12.setAttribute("class", "a3");

// TASK 3 TÄTER
let btnanswer4t3 = document.createElement("button");
btnanswer4t3.id = "answer4t3";
btnanswer4t3.innerHTML = "Hola Chica! Geiler Arsch";
btnanswer4t3.setAttribute("onclick", "answer1t3()");
btnanswer4t3.setAttribute("class", "a1");
let btnanswer5t3 = document.createElement("button");
btnanswer5t3.id = "answer5t3";
btnanswer5t3.innerHTML = "*pfeifen*";
btnanswer5t3.setAttribute("onclick", "answer2t3()");
btnanswer5t3.setAttribute("class", "a2");
let btnanswer6t3 = document.createElement("button");
btnanswer6t3.id = "answer6t3";
btnanswer6t3.innerHTML = "Lecker, lecker.";
btnanswer6t3.setAttribute("onclick", "answer3t3()");
btnanswer6t3.setAttribute("class", "a3");

// TASK 4
let btnanswer13 = document.createElement("button");
btnanswer13.id = "answer13";
btnanswer13.innerHTML = "*beleidigen*";
btnanswer13.setAttribute("onclick", "answer10()");
btnanswer13.setAttribute("class", "a1");
let btnanswer14 = document.createElement("button");
btnanswer14.id = "answer14";
btnanswer14.innerHTML = "*wortlos gehen*";
btnanswer14.setAttribute("onclick", "answer11()");
btnanswer14.setAttribute("class", "a2");

// TASK 5 B
let btnanswer15 = document.createElement("button");
btnanswer15.id = "answer15";
btnanswer15.innerHTML = "*weinen*";
btnanswer15.setAttribute("onclick", "answer12()");
btnanswer15.setAttribute("class", "a1");
let btnanswer16 = document.createElement("button");
btnanswer16.id = "answer16";
btnanswer16.innerHTML = "*Okay-Geste*";
btnanswer16.setAttribute("onclick", "end()");
btnanswer16.setAttribute("class", "a2");
// TASK 5 P
let btnanswer17 = document.createElement("button");
btnanswer17.id = "answer17";
btnanswer17.innerHTML = "Alles wird gut!";
btnanswer17.setAttribute("onclick", "answer12()");
btnanswer17.setAttribute("class", "a1");
let btnanswer18 = document.createElement("button");
btnanswer18.id = "answer18";
btnanswer18.innerHTML = "Es ist nicht deine Schuld!";
btnanswer18.setAttribute("onclick", "answer13()");
btnanswer18.setAttribute("class", "a2");

// BUTTON CHARAKTER
let btnbetroffene = document.createElement("button");
btnbetroffene.id = "selectb";
btnbetroffene.setAttribute("onclick", "changetotask2()");
btnbetroffene.setAttribute("class", "selectb");
let btnbetroffene2 = document.createElement("button");
btnbetroffene2.id = "selectb2";
btnbetroffene2.setAttribute("onclick", "changetotask5()");
btnbetroffene2.setAttribute("class", "selectb");
let btntäter = document.createElement("button");
btntäter.id = "selectt";
btntäter.setAttribute("onclick", "changetotask1()");
btntäter.setAttribute("class", "selectt");
let btntäter2 = document.createElement("button");
btntäter2.id = "selectt2";
btntäter2.setAttribute("onclick", "task3t()");
btntäter2.setAttribute("class", "selectt");
let btnpassant = document.createElement("button");
btnpassant.id = "selectp";
btnpassant.setAttribute("onclick", "changetotask3()");
btnpassant.setAttribute("class", "selectp");
let btnpassant2 = document.createElement("button");
btnpassant2.id = "selectp2";
btnpassant2.setAttribute("onclick", "task5p()");
btnpassant2.setAttribute("class", "selectp");

let btnneustart = document.createElement("button");
btnneustart.id = "neustart";
btnneustart.innerHTML = "Neustart";
btnneustart.setAttribute("onclick", "neustart()");
let btninfo = document.createElement("button");
btninfo.id = "info";
btninfo.innerHTML = "Interactive Media Design";
btninfo.setAttribute("onclick", "imd()");

let btndown;

// VIDEOS VOR QUIZ
let vid1 = document.getElementById("catcallvid1");
let vid2 = document.createElement("video");
vid2.src = "cat2.mp4";
vid2.id = "catcallvid2";
vid2.setAttribute("controls", "controls");
let vid3 = document.createElement("video");
vid3.src = "cat3.mp4";
vid3.id = "definitionvid";
vid3.setAttribute("controls", "controls");
// VIDEOS QUIZ
let vid4 = document.createElement("video");
vid4.src = "cat4.mp4";
vid4.id = "systemvid";
vid4.setAttribute("controls", "controls");
let vid5 = document.createElement("video");
vid5.src = "cat5.mp4";
vid5.id = "gestenvid";
vid5.setAttribute("controls", "controls");
let vid6 = document.createElement("video");
vid6.src = "cat6.mp4";
vid6.id = "gesten2vid";
vid6.setAttribute("controls", "controls");
let vid7 = document.createElement("video");
vid7.src = "cat7.mp4";
vid7.id = "okaygestevid";
vid7.setAttribute("controls", "controls");
let vid8 = document.createElement("video");
vid8.src = "cat8.mp4";
vid8.id = "einsatzvid";
vid8.setAttribute("controls", "controls");

//AUDIO
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
let audio9 = document.getElementById("audio9");
let audio10 = document.getElementById("audio10");
let audio11 = document.getElementById("audio11");
let audio12 = document.getElementById("audio12");
let audio13 = document.getElementById("audio13");
let audio14 = document.getElementById("audio14");
let audio15 = document.getElementById("audio15");
let audio16 = document.getElementById("audio16");

// BANNER
let banner = document.getElementById("inbannerleft");
let banner2 = document.getElementById("inbannerright");

function changeImg() {
  img1.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  if (btnstart.style.display === "none") {
    btnstart.style.display = "block";
  } else {
    btnstart.style.display = "none";
  }

  setTimeout(function replace1() {
    img1.replaceWith(img2);
    btnstart.replaceWith(btnsound);
    img2.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );

    btnsound.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);
}
window.changeImg = changeImg;

function startVid() {
  if (btnsound.style.display === "none") {
    btnsound.style.display = "block";
  } else {
    btnsound.style.display = "none";
  }
  vid1.style.display = "block";
  vid1.play();
  vid1.onended = function playvid2() {
    vid1.replaceWith(vid2);
    vid2.play();
  };

  vid2.onended = function replace2() {
    img2.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    setTimeout(function replace3() {
      img2.replaceWith(img3);
      btnsound.replaceWith(btncatcall1);
      banner.appendChild(btncatcall2);
      img3.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btncatcall1.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btncatcall2.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 1500);
  };
}
window.startVid = startVid;

function startVid2() {
  vid2.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img3.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btncatcall1.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btncatcall2.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function replace4() {
    vid2.replaceWith(vid3);
    vid3.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    vid3.play();
    img3.replaceWith(img4);
    btncatcall1.style.display = "none";
    btncatcall2.style.display = "none";
    img4.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);

  vid3.onended = function startquiz() {
    vid3.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    img4.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );

    setTimeout(function replace5() {
      vid3.style.display = "none";
      img4.replaceWith(img5);
      btncatcall1.replaceWith(btnquiz);
      btnquiz.style.display = "block";
      img5.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );

      btnquiz.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 1500);
  };
}
window.startVid2 = startVid2;

function quizstart() {
  img5.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnquiz.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function replace6() {
    img5.replaceWith(img6);
    btnquiz.style.display = "none";
    vid3.replaceWith(vid4);
    img6.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    vid4.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    vid4.play();
  }, 1500);

  vid4.onended = function task1() {
    vid4.replaceWith(img7);
    banner2.appendChild(btnanswer1);
    banner2.appendChild(btnanswer2);
    banner2.appendChild(btnanswer3);
    btnanswer2.style.display = "block";
    btnanswer3.style.display = "block";
  };
}
window.quizstart = quizstart;

// TASK 1
function answer1() {
  answerstask1();
  btndown = 1;
}
window.answer1 = answer1;

function answer2() {
  answerstask1();
  btndown = 2;
}
window.answer2 = answer2;

function answer3() {
  answerstask1();
  btndown = 3;
}
window.answer3 = answer3;

function answerstask1() {
  img6.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img7.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer1.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer2.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer3.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function picanswer() {
    img7.style.display = "none";
    btnanswer1.style.display = "none";
    btnanswer2.style.display = "none";
    btnanswer3.style.display = "none";
    img6.replaceWith(img8);
    img8.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);

  setTimeout(function audioplay() {
    if (btndown == 1) {
      audio1.play();
    } else if (btndown == 2) {
      audio2.play();
    } else if (btndown == 3) {
      audio3.play();
    }
  }, 2000);
}
window.answerstask1 = answerstask1;

function gestenvid() {
  vid5.style.display = "block";
  img7.replaceWith(vid5);
  vid5.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  vid5.play();

  vid5.onended = function task2() {
    vid5.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    img8.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );

    setTimeout(function task2pic() {
      img8.replaceWith(img10);
      vid5.replaceWith(img9);
      btnanswer1.replaceWith(btnanswer4);
      btnanswer2.replaceWith(btnanswer5);
      btnanswer3.replaceWith(btnanswer6);
      banner2.appendChild(btnbetroffene);
      img9.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      img10.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer4.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer5.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer6.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 1500);
  };
}
window.gestenvid = gestenvid;

// TASK 2
function answer1wg() {
  answerstask1_2();
  btndown = 1;
}
window.answer1wg = answer1wg;

function answer2wg() {
  answerstask1_2();
  btndown = 2;
}
window.answer2wg = answer2wg;

function answer3wg() {
  answerstask1_2();
  btndown = 3;
}
window.answer3wg = answer3wg;

function answerstask1_2() {
  btnbetroffene.style.display = "none";
  btntäter.style.display = "none";
  img10.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img9.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer4.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer5.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer6.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function picanswer() {
    img9.style.display = "none";
    btnanswer4.style.display = "none";
    btnanswer5.style.display = "none";
    btnanswer6.style.display = "none";
    img10.replaceWith(img8);
    img8.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);

  setTimeout(function audioplay() {
    if (btndown == 1) {
      audio1wg.play();
    } else if (btndown == 2) {
      audio2wg.play();
    } else if (btndown == 3) {
      audio3wg.play();
    }
  }, 2000);
}
window.answerstask1_2 = answerstask1_2;

function backtot2() {
  img8.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function () {
    img8.replaceWith(img10);
    img9.style.display = "block";
    btnanswer4.style.display = "block";
    btnanswer5.style.display = "block";
    btnanswer6.style.display = "block";
    btnbetroffene.style.display = "block";
    btntäter.style.display = "block";
    img10.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    img9.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer4.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer5.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer6.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);
}
window.backtot2 = backtot2;

function changetotask2() {
  img9.replaceWith(img11);
  btnanswer4.replaceWith(btnanswer7);
  btnanswer5.replaceWith(btnanswer8);
  btnanswer6.replaceWith(btnanswer9);
  banner2.appendChild(btntäter);
}
window.changetotask2 = changetotask2;

function changetotask1() {
  img11.replaceWith(img9);
  btnanswer7.replaceWith(btnanswer4);
  btnanswer8.replaceWith(btnanswer5);
  btnanswer9.replaceWith(btnanswer6);
}
window.changetotask1 = changetotask1;

function answer4() {
  btnbetroffene.style.display = "none";
  btntäter.style.display = "none";
  img10.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img11.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer7.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer8.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer9.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  setTimeout(function gone() {
    img10.replaceWith(img12);
    img11.style.display = "none";
    btnanswer7.style.display = "none";
    btnanswer8.style.display = "none";
    btnanswer9.style.display = "none";
    img12.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);

  setTimeout(function goneweg() {
    img12.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 3500);
  setTimeout(function trauen() {
    img12.replaceWith(img13);
    img13.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 5000);

  setTimeout(function gesten2vid() {
    img13.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 7000);
  setTimeout(function gesten2vid() {
    gesten2();
  }, 8500);
}
window.answer4 = answer4;

function answer5() {
  btnbetroffene.style.display = "none";
  btntäter.style.display = "none";
  img10.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img11.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer7.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer8.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer9.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  setTimeout(function gone() {
    img11.style.display = "none";
    btnanswer7.style.display = "none";
    btnanswer8.style.display = "none";
    btnanswer9.style.display = "none";
    gesten2();
  }, 1500);
}
window.answer5 = answer5;

function answer6() {
  btnbetroffene.style.display = "none";
  btntäter.style.display = "none";
  img10.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img11.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer7.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer8.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer9.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  setTimeout(function gone() {
    img10.replaceWith(img15);
    img11.style.display = "none";
    btnanswer7.style.display = "none";
    btnanswer8.style.display = "none";
    btnanswer9.style.display = "none";
    audio9.play();
    img15.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);
  setTimeout(function goneweg() {
    img15.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 3500);
  setTimeout(function trauen() {
    img15.replaceWith(img16);
    img16.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 5000);

  setTimeout(function gesten2vid() {
    img16.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 7000);
  setTimeout(function gesten2vid() {
    gesten2();
  }, 8500);
}
window.answer6 = answer6;

function gesten2() {
  img13.replaceWith(img14);
  img10.replaceWith(img14);
  img16.replaceWith(img14);
  img14.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  setTimeout(function vidplay() {
    img11.replaceWith(vid6);
    vid6.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    vid6.play();
  }, 2000);

  vid6.onended = function passantready() {
    vid6.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    img14.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );

    setTimeout(function passantda() {
      img14.replaceWith(img17);
      vid6.replaceWith(img18);
      img18.style.display = "block";
      btnanswer7.replaceWith(btnanswer10);
      btnanswer8.replaceWith(btnanswer11);
      btnanswer9.replaceWith(btnanswer12);
      btnanswer10.style.display = "block";
      btnanswer11.style.display = "block";
      btnanswer12.style.display = "block";
      banner2.appendChild(btntäter2);
      btntäter2.style.display = "block";
      img17.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      img18.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer10.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer11.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer12.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }),
      1500;
  };
}
window.gesten2 = gesten2;

// TASK 2
function answer1t3() {
  answerstask3_2();
  btndown = 1;
}
window.answer1t3 = answer1t3;

function answer2t3() {
  answerstask3_2();
  btndown = 2;
}
window.answer2t3 = answer2t3;

function answer3t3() {
  answerstask3_2();
  btndown = 3;
}
window.answer3t3 = answer3t3;

function answerstask3_2() {
  btnpassant.style.display = "none";
  btntäter2.style.display = "none";
  img17.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img18_2.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer4t3.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer5t3.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer6t3.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function picanswer() {
    img18_2.style.display = "none";
    btnanswer4t3.style.display = "none";
    btnanswer5t3.style.display = "none";
    btnanswer6t3.style.display = "none";
    img17.replaceWith(img8_2);
    img8_2.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);

  setTimeout(function audioplay() {
    if (btndown == 1) {
      audio1t3.play();
    } else if (btndown == 2) {
      audio2t3.play();
    } else if (btndown == 3) {
      audio3t3.play();
    }
  }, 2000);
}
window.answerstask3_2 = answerstask3_2;

function task3t() {
  img18.replaceWith(img18_2);
  btnanswer10.replaceWith(btnanswer4t3);
  btnanswer11.replaceWith(btnanswer5t3);
  btnanswer12.replaceWith(btnanswer6t3);
  banner2.appendChild(btnpassant);
}
window.task3t = task3t;

function changetotask3() {
  img18_2.replaceWith(img18);
  btnanswer4t3.replaceWith(btnanswer10);
  btnanswer5t3.replaceWith(btnanswer11);
  btnanswer6t3.replaceWith(btnanswer12);
}
window.changetotask3 = changetotask3;

function backtot3() {
  img8_2.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function () {
    img8_2.replaceWith(img17);
    img18_2.style.display = "block";
    btnanswer4t3.style.display = "block";
    btnanswer5t3.style.display = "block";
    btnanswer6t3.style.display = "block";
    btntäter2.style.display = "block";
    btnpassant.style.display = "block";
    img17.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    img18_2.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer4t3.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer5t3.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer6t3.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);
}
window.backtot3 = backtot3;

function answer7() {
  btnpassant.style.display = "none";
  btntäter2.style.display = "none";
  img17.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img18.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer10.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer11.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer12.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  setTimeout(function okayvid() {
    img18.style.display = "none";
    btnanswer10.style.display = "none";
    btnanswer11.style.display = "none";
    btnanswer12.style.display = "none";
    task4();
  }, 1500);
}
window.answer7 = answer7;

function answer8() {
  btnpassant.style.display = "none";
  btntäter2.style.display = "none";
  img17.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img18.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer10.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer11.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer12.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function () {
    img18.style.display = "none";
    btnanswer10.style.display = "none";
    btnanswer11.style.display = "none";
    btnanswer12.style.display = "none";
    img17.replaceWith(img22);
    img22.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    audio11.play();
  }, 1500);

  audio11.onended = function () {
    img22.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    setTimeout(function () {
      img22.replaceWith(img23);
      img23.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 1500);

    setTimeout(function () {
      img23.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 4000);

    setTimeout(function () {
      task4();
    }, 5500);
  };
}
window.answer8 = answer8;

function answer9() {
  btnpassant.style.display = "none";
  btntäter2.style.display = "none";
  img17.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img18.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer10.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer11.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer12.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );

  setTimeout(function () {
    img18.style.display = "none";
    btnanswer10.style.display = "none";
    btnanswer11.style.display = "none";
    btnanswer12.style.display = "none";
    img17.replaceWith(img24);
    img24.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    audio12.play();
  }, 1500);

  audio12.onended = function () {
    img24.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    setTimeout(function () {
      img24.replaceWith(img23);
      img23.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 1500);

    setTimeout(function () {
      img23.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 4000);

    setTimeout(function () {
      task4();
    }, 5500);
  };
}
window.answer9 = answer9;

function task4() {
  img17.replaceWith(img19);
  img23.replaceWith(img19);
  img19.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  audio10.play();

  audio10.onended = function task4da() {
    img19.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );

    setTimeout(function () {
      img19.replaceWith(img20);
      img18.replaceWith(img21);
      img21.style.display = "block";
      btnanswer11.replaceWith(btnanswer13);
      btnanswer12.replaceWith(btnanswer14);
      btnanswer13.style.display = "block";
      btnanswer14.style.display = "block";
      img20.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      img21.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer13.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer14.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 1500);
  };
}
window.task4 = task4;

function task4away() {
  img20.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img21.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer13.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer14.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
}
window.task4away = task4away;

function answer10() {
  task4away();
  setTimeout(function () {
    btnanswer13.style.display = "none";
    btnanswer14.style.display = "none";
    img21.style.display = "none";
    img20.replaceWith(img25);
    img25.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    audio13.play();
  }, 1500);

  audio13.onended = function () {
    img25.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );

    setTimeout(function () {
      okaygeste();
    }, 1500);
  };
}
window.answer10 = answer10;

function answer11() {
  task4away();
  setTimeout(function () {
    btnanswer13.style.display = "none";
    btnanswer14.style.display = "none";
    img21.style.display = "none";
    img20.replaceWith(img26);
    img26.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);
  setTimeout(function () {
    img26.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 3500);
  setTimeout(function () {
    okaygeste();
  }, 5000);
}
window.answer11 = answer11;

function okaygeste() {
  img25.replaceWith(img27);
  img26.replaceWith(img27);
  img27.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img21.replaceWith(vid7);
  vid7.style.display = "block";
  vid7.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  vid7.play();

  vid7.onended = function lasttask() {
    vid7.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    setTimeout(function () {
      vid7.replaceWith(img29);
      btnanswer13.replaceWith(btnanswer15);
      btnanswer14.replaceWith(btnanswer16);
      btnanswer15.style.display = "block";
      btnanswer16.style.display = "block";
      banner2.appendChild(btnpassant2);
      img29.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer15.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnanswer16.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 1500);
  };
}
window.okaygeste = okaygeste;

function task5away() {
  btnbetroffene2.style.display = "none";
  btnpassant2.style.display = "none";
  img27.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img29.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img30.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer15.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer16.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer17.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  btnanswer18.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  setTimeout(function () {
    btnanswer15.style.display = "none";
    btnanswer16.style.display = "none";
    btnanswer17.style.display = "none";
    btnanswer18.style.display = "none";
    img29.style.display = "none";
    img30.style.display = "none";
  }, 1500);
}
window.task5away = task5away;

function answer12() {
  task5away();
  setTimeout(function () {
    img27.replaceWith(img31);
    img31.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    audio14.play();
  }, 1500);
  setTimeout(function () {
    audio15.play();
  }, 2000);
}
window.answer12 = answer12;

function answer13() {
  task5away();
  setTimeout(function () {
    img27.replaceWith(img32);
    img32.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    audio14.play();
  }, 1500);
  setTimeout(function () {
    audio16.play();
  }, 2000);
}
window.answer13 = answer13;

function changetotask5() {
  img30.replaceWith(img29);
  btnanswer17.replaceWith(btnanswer15);
  btnanswer18.replaceWith(btnanswer16);
}
window.changetotask5 = changetotask5;

function task5p() {
  img29.replaceWith(img30);
  btnanswer15.replaceWith(btnanswer17);
  btnanswer16.replaceWith(btnanswer18);
  banner2.appendChild(btnbetroffene2);
}
window.task5p = task5p;

function backtot5() {
  img31.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  img32.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    }
  );
  setTimeout(function () {
    img31.replaceWith(img27);
    img32.replaceWith(img27);
    btnanswer15.style.display = "block";
    btnanswer16.style.display = "block";
    btnanswer17.style.display = "block";
    btnanswer18.style.display = "block";
    img29.style.display = "block";
    img30.style.display = "block";
    btnbetroffene2.style.display = "block";
    btnpassant2.style.display = "block";
    img27.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    img29.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    img30.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer15.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer16.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer17.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    btnanswer18.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }, 1500);
}
window.backtot5 = backtot5;

function end() {
  task5away();
  setTimeout(function () {
    img27.replaceWith(imgend);
    imgend.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    img29.replaceWith(vid8);
    vid8.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    vid8.play();
  }, 1500);

  vid8.onended = function neustart() {
    imgend.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    vid8.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 1500,
        iterations: 1,
        fill: "forwards",
      }
    );
    setTimeout(function () {
      vid8.style.display = "none";
      imgend.replaceWith(img1);
      banner.appendChild(btnneustart);
      banner.appendChild(btninfo);
      img1.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btninfo.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
      btnneustart.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }, 1500);
  };
}
window.end = end;

function neustart() {
  location.reload();
}
window.neustart = neustart;
function imd() {
  window.open("https://imd.mediencampus.h-da.de/");
}
window.imd = imd;
