#pragma strict

public var rockets: int = 0;
public var rocket: GameObject;
public var speed: float = 100.0f;
public var launchEvery: float = 0.5f;

private var lastShot: float;

function Add(numberOfRockets: int) {
	rockets += numberOfRockets;
}

function Remove(numberOfRockets: int) {
	rockets -= numberOfRockets;
}

function Shoot() {
	var rocketInstance: GameObject = Instantiate(rocket);
	rocketInstance.transform.position = gameObject.transform.position;

	var rocketRigidbody: Rigidbody2D = rocketInstance.GetComponent. < Rigidbody2D > ();
	var force: Vector2 = Vector2.right * speed * Time.deltaTime;
	rocketRigidbody.AddForce(force, ForceMode2D.Impulse);
	lastShot = Time.fixedTime;
	Remove(1);
}

function IsAllowedToShoot() {
	var enoughTimeGoneBy: boolean = Time.fixedTime - lastShot >= launchEvery;
	var hasEnoughRockets: boolean = rockets > 0;
	return (enoughTimeGoneBy && hasEnoughRockets);
}

function Update() {
	if (Input.GetKey(KeyCode.Return) && IsAllowedToShoot()) {
		Shoot();
	}
}
