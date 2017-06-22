

const readline =  require("readline");
const fs 	   =  require("fs"); 

var pluginName = "";
var today 	   = new Date().getFullYear();

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("What is your wordpress `Plugin` name ? ",(answer)=>{
	
	console.log("--------------------- wordpress plugin generator -------------------------");
	pluginName = answer.replace("-", "_");
	
	fs.mkdir(pluginName, function(){
		console.log(pluginName+" is create !");
	});

	fs.mkdir(pluginName+"/languages", function(){
		console.log(pluginName+"/languages is create !");
	});

	fs.mkdir(pluginName+"/includes", function(){
		console.log(pluginName+"/includes is create !");
	});

	fs.mkdir(pluginName+"/admin", function(){
		console.log(pluginName+"/admin is create !");
	});

	fs.mkdir(pluginName+"/admin/js", function(){
		console.log(pluginName+"/admin/js is create !");
	});	

	fs.mkdir(pluginName+"/admin/css", function(){
		console.log(pluginName+"/admin/js is create !");
	});

	fs.mkdir(pluginName+"/admin/images", function(){
		console.log(pluginName+"/admin/images is create !");
	});

	fs.mkdir(pluginName+"/public", function(){
		console.log(pluginName+"/public is create !");
	});

	fs.mkdir(pluginName+"/public/js", function(){
		console.log(pluginName+"/public/js is create !");
	});

	fs.mkdir(pluginName+"/public/css", function(){
		console.log(pluginName+"/public/css is create !");
	});

	fs.mkdir(pluginName+"/public/images", function(){
		console.log(pluginName+"/public/images is create !");
		console.log("---------------------  all file and folder create -------------------------");
	});

	fs.writeFile(pluginName+"/"+pluginName+".php",
		'<?php\n'+
		'\n'+
		'defined("ABSPATH") or exit();\n'+
		'\n'+
		'/*\n'+
 		'Plugin Name: ' + pluginName + '\n'+
 		'Plugin URI: http://your-website.com\n'+
 		'Description: plugin description.\n'+
 		'Author: your name and family\n'+
 		'Author URI: http://your-personal-website.com\n'+
 		'Version: 1.0.0\n'+
 		'License: GPLv2 or later\n'+
		'*/\n'+
		'\n'+
		'register_activation_hook(__FILE__, "' + pluginName + '_active");\n' +
		'register_deactivation_hook(__FILE__, "' + pluginName + '_deactive");\n' +
		'\n'+
		'\n'+
		'function ' + pluginName + '_active() {'+
		'\n'+
		'\n'+
		'}'+
		'\n'+
		'\n'+
		'function ' + pluginName + '_deactive() {'+
		'\n'+
		'\n'+
		'}'
		);

	fs.writeFile(pluginName+"/uninstall.php",
		'<?php\n'+
		'\n'+
		'defined("ABSPATH") or exit();\n'+
		'\n'

		);

	fs.writeFile(pluginName+"/public/css/"+ pluginName + "_style.css", 
		'\n'+
		'/*\n'+
 		'Style info : your style info\n'+
 		'Author: your name and family\n'+
 		'Author URI: http://your-personal-website.com\n'+
 		'Copyrghit : Copyright your-company-name (c) '+ today +' Copyright Holder All Rights Reserved.\n'+
		'*/\n'+
		'\n'

		);
	fs.writeFile(pluginName+"/public/js/" + pluginName + "_app.js",
		'"use strict";'
		);	

	fs.writeFile(pluginName+"/admin/css/admin_style.css",
		'\n'+
		'/*\n'+
 		'Style info : your style info\n'+
 		'Author: your name and family\n'+
 		'Author URI: http://your-personal-website.com\n'+
 		'Copyrghit : Copyright your-company-name (c) '+ today +' Copyright Holder All Rights Reserved.\n'+
		'*/\n'+
		'\n'
		);
	fs.writeFile(pluginName+"/admin/js/admin_js.js",
		'"use strict";'
		);

	rl.close();
});

