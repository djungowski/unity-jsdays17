#pragma strict

public var speed: float = 10.0f;
public var maxSwing: float = 0.45f;

private var movesRight: boolean = true;

function Start () {
}

function Update () {
	Swing(gameObject);
}

function Swing(light: GameObject) {
	var yRotation: float = speed * Time.deltaTime;

	var swing: Vector2;
	if (movesRight) {
		swing = Vector2(0, yRotation);
	} else {
		swing = Vector2(0, -yRotation);
	}

	light.transform.Rotate(swing);

	if (transform.rotation.y >= maxSwing) {
		movesRight = false;
	}
	if (transform.rotation.y <= -maxSwing) {
		movesRight = true;
	}
}