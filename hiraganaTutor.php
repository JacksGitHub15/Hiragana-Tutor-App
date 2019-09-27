<!DOCTYPE html>
<!-- to do 
style banner
turn alphabet into organised table
animation starts after hovered over
create a quiz that tests each vowel or a random quiz
display the results of the quiz
login system
create a timed quiz

-->
<html>
<head>
<script
	src="https://code.jquery.com/jquery-3.3.1.min.js"
	 integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	 crossorigin="anonymous">
	</script>
<link rel="stylesheet" href="style.css">
<script src="audio.js"></script> 
<header class="banner" >The Hiragana Tutor App </header>
<title class="title">Hiragana App</title>
</head>

<body>
<section class="chars">
	<span id="colA"></span>
	<div id="a" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/a.png" height="90" width="90"> </img>
		<img class="active" src="gifs/a.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'a'</div>
		<audio id="audioa" src="audio/a.ogg"></audio>
	</div>

	<span id="colI"></span>
	<div id="i" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/i.png" height="90" width="90"> </img>
		<img class="active" src="gifs/i.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'i'</div>
		<audio id="audioi" src="audio/i.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="u" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/u.png" height="90" width="90"> </img>
		<img class="active" src="gifs/u.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'u'</div>
		<audio id="audiou" src="audio/u.ogg"></audio>
	</div>

	<span id="colE"></span>
	<div id="e" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/e.png" height="90" width="90"> </img>
		<img class="active" src="gifs/e.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'e'</div>
		<audio id="audioe" src="audio/e.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="o" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/o.png" height="90" width="90"> </img>
		<img class="active" src="gifs/o.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'o'</div>
		<audio id="audioo" src="audio/o.ogg"></audio>
	</div>

	<span id="colA"></span>
	<div id="ka" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ka.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ka.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ka'</div>
		<audio id="audioka" src="audio/ka.ogg"></audio>
	</div>

	<span id="colI"></span>
	<div id="ki" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ki.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ki.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ki'</div>
		<audio id="audioki" src="audio/ki.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="ku" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ku.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ku.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ku'</div>
		<audio id="audioku" src="audio/ku.ogg"></audio>
	</div>
	
	<span id="colE"></span>
	<div id="ke" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ke.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ke.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ke'</div>
		<audio id="audioke" src="audio/ke.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="ko" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ko.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ko.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ko'</div>
		<audio id="audioko" src="audio/ko.ogg"></audio>
	</div>
	
	<span id="colA"></span>
	<div id="sa" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/sa.png" height="90" width="90"> </img>
		<img class="active" src="gifs/sa.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'sa'</div>
		<audio id="audiosa" src="audio/sa.ogg"></audio>
	</div>

	<span id="colI"></span>
	<div id="shi" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/shi.png" height="90" width="90"> </img>
		<img class="active" src="gifs/shi.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'shi'</div>
		<audio id="audioshi" src="audio/shi.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="su" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/su.png" height="90" width="90"> </img>
		<img class="active" src="gifs/su.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'su'</div>
		<audio id="audiosu" src="audio/su.ogg"></audio>
	</div>

	<span id="colE"></span>
	<div id="se" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/se.png" height="90" width="90"> </img>
		<img class="active" src="gifs/se.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'se'</div>
		<audio id="audiose" src="audio/se.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="so" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/so.png" height="90" width="90"> </img>
		<img class="active" src="gifs/so.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'so'</div>
		<audio id="audioso" src="audio/so.ogg"></audio>
	</div>

	<span id="colA"></span>
	<div id="ta" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ta.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ta.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ta'</div>
		<audio id="audiota" src="audio/ta.ogg"></audio>
	</div>

	<span id="colI"></span>
	<div id="chi" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/chi.png" height="90" width="90"> </img>
		<img class="active" src="gifs/chi.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'chi'</div>
		<audio id="audiochi" src="audio/chi.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="tsu" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/tsu.png" height="90" width="90"> </img>
		<img class="active" src="gifs/tsu.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'tsu'</div>
		<audio id="audiotsu" src="audio/tsu.ogg"></audio>
	</div>

	<span id="colE"></span>
	<div id="te" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/te.png" height="90" width="90"> </img>
		<img class="active" src="gifs/te.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'te'</div>
		<audio id="audiote" src="audio/te.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="to" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/to.png" height="90" width="90"> </img>
		<img class="active" src="gifs/to.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'to'</div>
		<audio id="audioto" src="audio/to.ogg"></audio>
	</div>

	<span id="colA"></span>
	<div id="na" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/na.png" height="90" width="90"> </img>
		<img class="active" src="gifs/na.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'na'</div>
		<audio id="audiona" src="audio/na.ogg"></audio>
	</div>

	<span id="colI"></span>
	<div id="ni" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ni.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ni.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ni'</div>
		<audio id="audioni" src="audio/ni.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="nu" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/nu.png" height="90" width="90"> </img>
		<img class="active" src="gifs/nu.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'nu'</div>
		<audio id="audionu" src="audio/nu.ogg"></audio>
	</div>

	<span id="colE"></span>
	<div id="ne" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ne.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ne.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ne'</div>
		<audio id="audione" src="audio/ne.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="no" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/no.png" height="90" width="90"> </img>
		<img class="active" src="gifs/no.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'no'</div>
		<audio id="audiono" src="audio/no.ogg"></audio>
	</div>

	<span id="colA"></span>
	<div id="ha" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ha.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ha.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ha'</div>
		<audio id="audioha" src="audio/ha.ogg"></audio>
	</div>

	<span id="colI"></span>
	<div id="hi" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/hi.png" height="90" width="90"> </img>
		<img class="active" src="gifs/hi.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'hi'</div>
		<audio id="audiohi" src="audio/hi.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="fu" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/fu.png" height="90" width="90"> </img>
		<img class="active" src="gifs/fu.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'fu'</div>
		<audio id="audiofu" src="audio/fu.ogg"></audio>
	</div>

	<span id="colE"></span>
	<div id="he" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/he.png" height="90" width="90"> </img>
		<img class="active" src="gifs/he.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'he'</div>
		<audio id="audiohe" src="audio/he.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="ho" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ho.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ho.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ho'</div>
		<audio id="audioho" src="audio/ho.ogg"></audio>
	</div>

	<span id="colA"></span>
	<div id="ma" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ma.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ma.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ma'</div>
		<audio id="audioma" src="audio/ma.ogg"></audio>
	</div>

	<span id="colI"></span>
	<div id="mi" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/mi.png" height="90" width="90"> </img>
		<img class="active" src="gifs/mi.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'mi'</div>
		<audio id="audiomi" src="audio/mi.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="mu" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/mu.png" height="90" width="90"> </img>
		<img class="active" src="gifs/mu.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'mu'</div>
		<audio id="audiomu" src="audio/mu.ogg"></audio>
	</div>

	<span id="colE"></span>
	<div id="me" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/me.png" height="90" width="90"> </img>
		<img class="active" src="gifs/me.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'me'</div>
		<audio id="audiome" src="audio/me.ogg"></audio>
	</div>

	<span id="colO"></span>
		<div id="mo" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/mo.png" height="90" width="90"> </img>
		<img class="active" src="gifs/mo.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'mo'</div>
		<audio id="audiomo" src="audio/mo.ogg"></audio>
	</div>

	<span id="colA"></span>
	<div id="ya" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ya.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ya.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ya'</div>
		<audio id="audioya" src="audio/ya.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="yu" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/yu.png" height="90" width="90"> </img>
		<img class="active" src="gifs/yu.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'yu'</div>
		<audio id="audioyu" src="audio/yu.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="yo" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/yo.png" height="90" width="90"> </img>
		<img class="active" src="gifs/yo.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'yo'</div>
		<audio id="audioyo" src="audio/yo.ogg"></audio>
	</div>

	<span id="colA"></span>
	<div id="ra" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ra.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ra.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ra'</div>
		<audio id="audiora" src="audio/ra.ogg"></audio>
	</div>

	<span id="colI"></span>
	<div id="ri" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ri.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ri.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ri'</div>
		<audio id="audiori" src="audio/ri.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="ru" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ru.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ru.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ru'</div>
		<audio id="audioru" src="audio/ru.ogg"></audio>
	</div>

	<span id="colE"></span>
	<div id="re" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/re.png" height="90" width="90"> </img>
		<img class="active" src="gifs/re.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 're'</div>
		<audio id="audiore" src="audio/re.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="ro" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/ro.png" height="90" width="90"> </img>
		<img class="active" src="gifs/ro.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'ro'</div>
		<audio id="audioro" src="audio/ro.ogg"></audio>
	</div>

	<span id="colA"></span>
	<div id="wa" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/wa.png" height="90" width="90"> </img>
		<img class="active" src="gifs/wa.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'wa'</div>
		<audio id="audiowa" src="audio/wa.ogg"></audio>
	</div>

	<span id="colO"></span>
	<div id="wo" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/wo.png" height="90" width="90"> </img>
		<img class="active" src="gifs/wo.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'wo'</div>
		<audio id="audiowo" src="audio/wo.ogg"></audio>
	</div>

	<span id="colU"></span>
	<div id="n" class="gallery" value="play" onclick="play(this)">
		<img class="static" src="images/n.png" height="90" width="90"> </img>
		<img class="active" src="gifs/n.gif" height="90" width="90"> </img>
		<div class="desc"> Romaji: 'n'</div>
		<audio id="audion" src="audio/n.ogg"></audio>
	</div>
</section>
</body>

<section class="quizSection">
	<div id="container">
		<div id="trainingSets" class="quizHeader">Choose a Training Set
			<input type="button" class="trainingChoice" id="tCa" value="Vowel a" onclick="startQuiz1()"></input>
			<input type="button" class="trainingChoice" id="tCi" value="Vowel i" onclick="startQuiz2()"></input>
			<input type="button" class="trainingChoice" id="tCu" value="Vowel u" onclick="startQuiz3()"></input>
			<input type="button" class="trainingChoice" id="tCe" value="Vowel e" onclick="startQuiz4()"></input>
			<input type="button" class="trainingChoice" id="tCo" value="Vowel o" onclick="startQuiz5()"></input>
			<!--<input type="button" class="trainingChoice" id="rand" value="Random" onclick="startQuiz6()"></input>-->
		</div>
		<div id="quiz" style="display: none">
			<div id="question"></div>
			<div id="qImg"></div>
			<div id="choices">
				<div class="choice" id="A" onclick="checkAnswer('A')"></div>
				<div class="choice" id="B" onclick="checkAnswer('B')"></div>
				<div class="choice" id="C" onclick="checkAnswer('C')"></div>
				<div class="choice" id="D" onclick="checkAnswer('D')"></div>
			</div>
			<div id="romajis">
				<div class="romaji" id="romajiA" onclick="checkAnswer('A')"></div>
				<div class="romaji" id="romajiB" onclick="checkAnswer('B')"></div>
				<div class="romaji" id="romajiC" onclick="checkAnswer('C')"></div>
				<div class="romaji" id="romajiD" onclick="checkAnswer('D')"></div>
			</div>
			<div id="progress"></div>
		</div>
		<div id="scoreContainer" style="display: none"></div>
	</div>	
	<script src="quizAttempt1.js"></script> 
</section>
<p><a href="http://www.guidetojapanese.org/learn/complete/hiragana"> Gifs and Audio files were found here</a></p>
<p><a href="https://en.wikipedia.org/wiki/Hiragana"> Image files were found here</a></p>
<p><a href="https://www.youtube.com/watch?v=49pYIMygIcU"> YouTube Tutorial helped for Jvascript quiz</a></p>
<p><a href="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"> The jQuery library used</a></p>
</html>
