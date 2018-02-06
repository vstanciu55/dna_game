// Modified from http://genome-game.dcs.aber.ac.uk/game/#
"use strict";
var lang = "English";
//This function changes the language of the site depending on the state of the translation button
function changeLang(id) {
	var Title = document.getElementById("Title");
	if (id.innerHTML == "Cymraeg"){
		id.innerHTML = "English";
		lang = "Cymraeg";
		Title.src = "images/DNA_NEIDR.png";
		setLanguageStrings();
	} else {
		id.innerHTML = "Cymraeg";
		lang = "English";
		Title.src = "images/DNA_SNAKE.png";
		setLanguageStrings();
	}
}

//This variables contains the translations of each piece of text in the game
var translate = {
    "English": {
	"r_menu": "DNA Replication",
	"s_menu": "Protein Synthesis",
	"m_menu": "Menu",
	"main_menu": "MAIN MENU",
	"lvl_one": "Level One",
	"lvl_two": "Level Two",
	"leader1": "Level 1 Leader Board",
	"leader2": "Level 2 Leader Board",
	"clear_leader": "Clear Leader Board",
	"reminder": "Remember: ",
	"speed": "Slow",
	"start": "Start",
	"collect": "Collect",
	"next": "Next",
	"a_collect": "Already Collected",
	"DNA_r": "DNA REPLICATION",
	"protein_s": "PROTEIN SYNTHESIS",
	"start_p": "Start Practice",
	"press_s": "Press Space",
	"take_t": "Take Test",
	"press_t": "Press T",
	"how_play": "Learn More",
	"press_h": "Press L",
	"over": "Game Over!",
	"take_t_over": "Take Test",
	"press_t_over": "Press T",
	"start_p_over": "Start Practice",
	"press_s_over": "Press Space",
	"over_leader": "You're on the Leader Board!",
	"enter3": "Enter a 3 character name",
	"press_e": "Press enter to complete",
	"score": "Score: ",
	"play_vid": "How to Play",
	"play_1": "Level One",
	"play_2": "Level Two",
	"how_to": "Learn More",
	"para_1": "The human body is constantly duplicating cells, to do this it must take information from the original cell. This information is the <b>DNA of the cell</b>, since DNA has two strands, the new cell takes one of those strands. It then uses the <b>bases</b> of the DNA to create the second strand.",
	"para_2": "These bases are <b>A, T, C and G</b>. It is important to remember that <b>A and T</b> go together, as do <b>G and C</b>. A and T have a double bond where C and G have a triple bond.",
	"para_3": "Using the <b>arrow keys</b>  you must collect the correct base on the left which corresponds to the one on the right, starting from the top. Collecting the correct one will win you 5 points, the wrong one will lose you 5.",
	"para_4": "When these bases are collected in the <b>correct order</b> the DNA becomes double stranded and the new cell is formed.",
	"para_5": "Level Two is based on a process called <b>Central Dogma</b>, this is how Proteins are made. The first part of this process is <b>Transcription</b>, this turns <b>DNA into RNA</b>. RNA uses the same bases as DNA except <b>T turns into U</b>.",
	"para_6": "The next part is <b>Translation</b>, the RNA is passed through a <b>Ribosome</b> three bases at a time. It reads the three bases and matches them with the corresponding bases. When the entire RNA is matched, the <b>Protein is created</b>.",
	"para_7": "Using the arrow keys, <b>collect the correct 3 bases</b> which match the RNA going through the Ribosome.	In the practice the correct bases will light up and the incorrect ones will be black. In the test all bases will be black and <b>you must work out</b> which is correct.",
	"": ""
    },
    "Cymraeg": {
	"r_menu": "Dyblygiad DNA",
	"s_menu": "Synthesu Protein",
	"m_menu": "Dewislen",
	"main_menu": "PRIF DDEWISLEN",
	"lvl_one": "Lefel Un",
	"lvl_two": "Lefel Dau",
	"leader1": "Sgor Fwrdd Lefel Un",
	"leader2": "Sgor Fwrdd Lefel Un",
	"clear_leader": "Dileu'r Sgor Fwrdd",
	"reminder": "Cofiwch: ",
	"speed": "Araf",
	"start": "Dechrau",
	"collect": "Casglu",
	"next": "Nesaf",
	"a_collect": "Gasglwyd eisoes",
	"DNA_r": "DYBLYGIAD DNA",
	"protein_s": "SYNTHESU PROTEIN",
	"start_p": "Dechrau Ymarfer",
	"press_s": "Gwasgwch y Bylchwr",
	"take_t": "Cymerwch y Prawf",
	"press_t": "Gwasgwch T",
	"how_play": "Dysgwch Mwy",
	"press_h": "Gwasgwch L",
	"over": "Gem Drosodd!",
	"take_t_over": "Cymryd y Prawf",
	"press_t_over": "Gwasgwch T",
	"start_p_over": "Dechrau Ymarfer",
	"press_s_over": "Gwasgwch y Bylchwr",
	"over_leader": "Rydych chi ar y sgor fwrdd!",
	"enter3": "Osodwch enw 3 llythyren",
	"press_e": "Gwasgwch enter i gwblhau",
	"score": "Sgor: ",
	"play_vid": "Sut i Chwarae",
	"play_1": "Lefel Un",
	"play_2": "Lefel Dau",
	"how_to": "Dysgwch Mwy",
	"para_1": "Mae'r corff dynol yn gyson yn dyblygu celloedd, i wneud hyn rhaid iddo gymryd gwybodaeth o'r gell wreiddiol. Mae'r wybodaeth hon yn <b>DNA y gell</b>, gan fod gan DNA dau linyn, mae'r gell newydd yn cymryd un o'r llinynnau yma. Yna mae'n defnyddio'r <b>basau'r</b> DNA i ail greu'r ail linyn.",
	"para_2": "<b>A, T, C a G</b> yw'r basau. Mae'n bwysig cofio bod <b>A a T</b> yn mynd gyda'i gilydd, fel y mae <b>G a C</b>. Mae gan A a T fond dwbl ac mae gan C a G bond triphlyg.",
	"para_3": "Gan ddefnyddio'r <b>bysellau saeth</b> rhaid i chi gasglu'r basau cywir ar y chwith sy'n cyfateb i'r un ar y dde, gan ddechrau o'r brig. Fydd casglu'r un cywir yn ennill chi 5 pwynt, bydd yr un anghywir yn colli chi 5.",
	"para_4": "Pan fydd y basau hyn yn cael eu casglu yn y <b>drefn gywir</b>, fydd y llinyn DNA yn dyblu a fydd gell newydd yn cael ei ffurfio.",
	"para_5": "Mae lefel dau yn seiliedig ar y broses sy'n ffurfio <b>Dogma Canolog</b>, bioleg foleciwlaidd, dyma sut mae Proteinau yn cael eu gwneud. Mae rhan gyntaf y broses hon yw <b>Trawsgrifio</b>. Mae hyn yn troi <b>DNA i mewn RNA</b>. Mae RNA yn defnyddio'r un basau ag DNA ac eithrio <b>T troi i mewn i U</b>.",
	"para_6": "Mae rhan nesaf yw <b>Cyfieithu</b>, mae'r RNA cael ei basio drwy'r <b>Ribosome</b> dair bas ar y tro. Mae'n darllen y tair bas ac yn eu cyfateb a y basau cyfatebol. Pan fydd y RNA cyfan yn cyfateb, mae'r <b>Protein yn cael ei greu</b>.",
	"para_7": "Gan ddefnyddio'r bysellau saeth, <b>casglwch y 3 basau cywir</b> sy'n cyd-fynd a'r RNA sy'n mynd drwy'r Ribosome. Yn ystod yr ymarfer, bydd y basau cywir wedi ei goleuo a bydd y rhai anghywir yn ddu. Yn y prawf, bydd yr holl basau fod yn ddu a <b>rhaid i chi weithio allan</b> pa un sydd yn gywir.",
	"": ""
    }
};

//This function puts the translations into the buttons, labels etc
function setLanguageStrings() {
	document.getElementById("r_menu").innerHTML  = (translate[lang]["r_menu"]);
	document.getElementById("s_menu").innerHTML  = (translate[lang]["s_menu"]);
	document.getElementById("m_menu").innerHTML  = (translate[lang]["m_menu"]);
	document.getElementById("main_menu").innerHTML  = (translate[lang]["main_menu"]);
	document.getElementById("lvl_one").innerHTML  = (translate[lang]["lvl_one"]);
	document.getElementById("lvl_two").innerHTML  = (translate[lang]["lvl_two"]);
	document.getElementById("leader1").innerHTML  = (translate[lang]["leader1"]);
	document.getElementById("leader2").innerHTML  = (translate[lang]["leader2"]);
	document.getElementById("clear_leader").innerHTML  = (translate[lang]["clear_leader"]);
	document.getElementById("reminder").innerHTML  = (translate[lang]["reminder"]);
	document.getElementById("speed").innerHTML  = (translate[lang]["speed"]);
	document.getElementById("start").innerHTML  = (translate[lang]["start"]);
	document.getElementById("collect").innerHTML  = (translate[lang]["collect"]);
	document.getElementById("next").innerHTML  = (translate[lang]["next"]);
	document.getElementById("a_collect").innerHTML  = (translate[lang]["a_collect"]);
	document.getElementById("DNA_r").innerHTML  = (translate[lang]["DNA_r"]);
	document.getElementById("protein_s").innerHTML  = (translate[lang]["protein_s"]);
	document.getElementById("start_p").innerHTML  = (translate[lang]["start_p"]);
	document.getElementById("press_s").innerHTML  = (translate[lang]["press_s"]);
	document.getElementById("take_t").innerHTML  = (translate[lang]["take_t"]);
	document.getElementById("press_t").innerHTML  = (translate[lang]["press_t"]);
	document.getElementById("how_play").innerHTML  = (translate[lang]["how_play"]);
	document.getElementById("press_h").innerHTML  = (translate[lang]["press_h"]);
	document.getElementById("over").innerHTML  = (translate[lang]["over"]);
	document.getElementById("start_p_over").innerHTML  = (translate[lang]["start_p_over"]);
	document.getElementById("press_s_over").innerHTML  = (translate[lang]["press_s_over"]);
	document.getElementById("take_t_over").innerHTML  = (translate[lang]["take_t_over"]);
	document.getElementById("press_t_over").innerHTML  = (translate[lang]["press_t_over"]);
	document.getElementById("over_leader").innerHTML  = (translate[lang]["over_leader"]);
	document.getElementById("enter3").innerHTML  = (translate[lang]["enter3"]);
	document.getElementById("press_e").innerHTML  = (translate[lang]["press_e"]);
	document.getElementById("score").innerHTML  = (translate[lang]["score"]);
	document.getElementById("play_vid").innerHTML  = (translate[lang]["play_vid"]);
	document.getElementById("play_1").innerHTML  = (translate[lang]["play_1"]);
	document.getElementById("play_2").innerHTML  = (translate[lang]["play_2"]);
	document.getElementById("how_to").innerHTML  = (translate[lang]["how_to"]);
	document.getElementById("para_1").innerHTML  = (translate[lang]["para_1"]);
	document.getElementById("para_2").innerHTML  = (translate[lang]["para_2"]);
	document.getElementById("para_3").innerHTML  = (translate[lang]["para_3"]);
	document.getElementById("para_4").innerHTML  = (translate[lang]["para_4"]);
	document.getElementById("para_5").innerHTML  = (translate[lang]["para_5"]);
	document.getElementById("para_6").innerHTML  = (translate[lang]["para_6"]);
	document.getElementById("para_7").innerHTML  = (translate[lang]["para_7"]);
}