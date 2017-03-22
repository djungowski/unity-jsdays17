#pragma strict

public var rockets: int = 0;
public var rocket: GameObject;
public var speed: float = 100.0f;
public var launchEvery: float = 0.5f;
public var hudText: UI.Text;

private var lastShot: float;

function Add(numberOfRockets: int) {
	rockets += numberOfRockets;
	UpdateHUD();
}

function Remove(numberOfRockets: int) {
	rockets -= numberOfRockets;
	UpdateHUD();
}

function UpdateHUD() {
	hudText.text = rockets.ToString();
}

function Shoot() {
	var rocketInstance: GameObject = Instantiate(
		rocket,
		gameObject.transform.position,
		GetRocketRotation()
	);

	var rocketRigidbody: Rigidbody2D = rocketInstance.GetComponent.<Rigidbody2D>();
	var force = GetRocketForce();

	rocketRigidbody.AddForce(force, ForceMode2D.Impulse);
	PlayRocketSound(rocketInstance);
	Remove(1);
	Destroy(rocketInstance, 2);

	lastShot = Time.fixedTime;
}

function GetRocketRotation() {
	var rocketYRotation = 0;
	if (GetPlayerOrientation() == Vector2.left) {
		rocketYRotation = 180;
	}
	return Quaternion(0, rocketYRotation, 0, 0);
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
