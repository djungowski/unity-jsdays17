#pragma strict

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == 'Enemy') {
		Destroy(other.gameObject);
		Destroy(gameObject);
	}
}