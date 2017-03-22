#pragma strict

public var health: float = 100.0f;
public var HudHealth: UI.Slider;

function RemoveHealth(amount: float) {
	health = health - amount;
	UpdateHUD();
}

function UpdateHUD() {
	HudHealth.value = health;
}
