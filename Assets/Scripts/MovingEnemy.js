#pragma strict

public var waypoint1: GameObject;
public var waypoint2: GameObject;
public var speed: float = 0.1f;

private var targetPosition: GameObject;
private var rigidBody: Rigidbody2D;
private var rightDirection: float = 180;
private var leftDirection: float = 0;

function Start () {
	rigidBody = GetComponent.<Rigidbody2D>();
	targetPosition = waypoint1;
}

function FixedUpdate () {
	var position: Vector3 = gameObject.transform.position;
	var newPosition: Vector3 = Vector3.Lerp(position, targetPosition.transform.position, speed);
	rigidBody.MovePosition(newPosition);
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag != 'Waypoint') {
		return;
	}
	if (targetPosition == waypoint1) {
		targetPosition = waypoint2;
	} else {
		targetPosition = waypoint1;
	}
	Rotate();
}

function Rotate() {
	var currentRotation: Quaternion = transform.rotation;
	var yRotation: float;

	if (currentRotation.y == 0) {
		yRotation = rightDirection;
	} else {
		yRotation = leftDirection;
	}

	var newRotation: Quaternion = Quaternion(
		currentRotation.x,
		yRotation,
		currentRotation.z,
		currentRotation.w
	);

	transform.rotation = newRotation;
}