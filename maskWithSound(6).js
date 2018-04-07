(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,347);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,570,197.8), null);


// stage content:
(lib.maskWithSound6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("GrowlingLionSoundBiblecom495747737");
	}
	this.frame_2 = function() {
		home = this;  
		
		createjs.Sound.registerSound("/sounds/BirdsInForestSoundBiblecom472460759.mp3","Birds");
	}
	this.frame_20 = function() {
		createjs.Sound.play("Birds");
	}
	this.frame_38 = function() {
		createjs.Sound.stop("Birds");
	}
	this.frame_59 = function() {
		createjs.Sound.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(18).call(this.frame_20).wait(18).call(this.frame_38).wait(21).call(this.frame_59).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4HNQhKhLguhXQgtBXhKBLQjAC/kOAAQkOAAi/i/Qi+i/AAkOQAAkNC+jAQC/i+EOAAQEOAADAC+QBKBMAtBXQAuhXBKhMQC/i+EPAAQEOAAC/C+QC+DAAAENQAAEOi+C/Qi/C/kOAAQkPAAi/i/g");
	mask.setTransform(267.7,209.5);

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(350.3,216.2,0.72,0.72,0,0,0,284.9,98.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:285,regY:98.9,scaleX:0.72,scaleY:0.72,x:346.8,y:216.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:343.3,y:216.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:339.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:336.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:332.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:329.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:325.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:322.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:318.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:315.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:311.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:308.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:304.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:301.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:297.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:294.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:290.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:287.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:283.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:280.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:276.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:273},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:269.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:266},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:262.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:259},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:255.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:252},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:248.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:244.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:241.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:237.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:234.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:230.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:227.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:223.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:220.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:216.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:213.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:209.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:206.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:202.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:199.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:195.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:192.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:188.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:185.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:181.7,y:216.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:178.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:174.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:171.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:167.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:164.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:160.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:157.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:153.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:150.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:146.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:143.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(420.2,345.2,245.9,129.5);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png?1523126551628", id:"Bitmap2"},
		{src:"sounds/GrowlingLionSoundBiblecom495747737.mp3?1523126551628", id:"GrowlingLionSoundBiblecom495747737"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;