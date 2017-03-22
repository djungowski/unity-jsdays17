#pragma strict

public var health: float = 100.0f;

function RemoveHealth(amount: float) {
	health = health - amount;
}
