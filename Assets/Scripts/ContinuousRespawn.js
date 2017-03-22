#pragma strict

public var item: GameObject;
public var respawnItem: float = 5.0f;

private var lastSpawned: float = 0;

function Start () {
}

function Update() {
	if (item.activeSelf) {
		lastSpawned = Time.fixedTime;
		return;
	}

	if (Time.fixedTime - lastSpawned >= respawnItem) {
		item.SetActive(true);
		lastSpawned = Time.fixedTime;
	}

}