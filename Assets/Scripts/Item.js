#pragma strict

public var rockets: int = 5;
public var collectSound: AudioClip;

function OnTriggerEnter2D (other: Collider2D) {
	var rocketLauncher: Rocketlauncher = other.gameObject.GetComponent.<Rocketlauncher>();

	if (rocketLauncher) {
		rocketLauncher.Add(rockets);
		PlaySound();
	}

	gameObject.SetActive(false);
}

function PlaySound() {
	// var audio = gameObject.GetComponent.<AudioSource>();
	// audio.Play();
	AudioSource.PlayClipAtPoint(collectSound, Camera.main.transform.position);
}
