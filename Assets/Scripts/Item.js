#pragma strict

public var rockets: int = 5;

function Start () {
	
}

function OnTriggerEnter2D (other: Collider2D) {
	var rocketLauncher: Rocketlauncher = other.gameObject.GetComponent.<Rocketlauncher>();

	if (rocketLauncher) {
		rocketLauncher.Add(rockets);
	}

	Destroy(gameObject);
}
