#pragma strict

public var speed: float = 10.0f;
public var maxSwing: float = 0.45f;

private var movesRight: boolean = true;

function Start () {
}

function Update () {
	var yRotation: float = speed * Time.deltaTime;;

	var swing: Vector2;
	if (movesRight) {
		swing = Vector2(0, yRotation);
	} else {
		swing = Vector2(0, -yRotation);
	}

	transform.Rotate(swing);

	Debug.Log(transform.rotation);
	if (transform.rotation.y >= maxSwing) {
		movesRight = false;
	}
	if (transform.rotation.y <= -maxSwing) {
		movesRight = true;
	}
}
