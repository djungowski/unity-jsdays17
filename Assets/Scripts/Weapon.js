#pragma strict

public var weaponSound: AudioClip;

function Start() {
	PlayWeaponSound();
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == 'Enemy') {
		Destroy(other.gameObject);
		Destroy(gameObject);
	}
}

function PlayWeaponSound() {
	AudioSource.PlayClipAtPoint(weaponSound, Camera.main.transform.position);
}