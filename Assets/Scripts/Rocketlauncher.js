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
	rocketInstance.transform.Rotate(GetPlayerOrientation());

	var rocketRigidbody: Rigidbody2D = rocketInstance.GetComponent.<Rigidbody2D>();
	var force = GetRocketForce();

	rocketRigidbody.AddForce(force, ForceMode2D.Impulse);
	PlayRocketSound(rocketInstance);
	Remove(1);
	Destroy(rocketInstance, 2);

	lastShot = Time.fixedTime;
}

function GetRocketForce() {
	var force: Vector2 = GetPlayerOrientation();
	return force * speed * Time.deltaTime;
}

function GetPlayerOrientation() {
	var xScale: float = gameObject.transform.localScale.x;
	if (xScale > 0) {
		return Vector2.right;
	}

	return Vector2.left;
}

function PlayRocketSound(rocketInstance: GameObject) {
	rocketInstance.GetComponent.<AudioSource>().Play();
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
