#pragma strict

function OnCollisionEnter2D() {
	var audio: AudioSource = GetComponent.<AudioSource>();
	audio.Play();
}