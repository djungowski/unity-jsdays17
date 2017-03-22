#pragma strict

public var speed: float = 0.5f;

function Start () {
	
}

function Update () {
	var rotation = Vector3.up * speed * Time.deltaTime;

	transform.Rotate(rotation);
}
