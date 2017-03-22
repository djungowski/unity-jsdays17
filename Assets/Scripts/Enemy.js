#pragma strict

public var damage: float = 10.0f;

function Start () {
	Debug.Log(gameObject);
}

function OnCollisionEnter2D(other: Collision2D) {
	var health: Health = other.gameObject.GetComponent.<Health>();
	if (health) {
		health.RemoveHealth(damage);
		// In C#: gameObject.GetComponent<Health>()

	}
}
