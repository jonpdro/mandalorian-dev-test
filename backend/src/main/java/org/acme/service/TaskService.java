package org.acme.service;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;

import org.acme.controller.TaskController;

import io.smallrye.mutiny.Uni;

@Singleton
public class TaskService {

	@Inject
	TaskController controller;

	public Uni<List<String>> getAllKeys() {
		return controller.keys();
	}

	public String getKey(String key) {
		return controller.get(key);
	}

	public void insertTO(String key, String value) {
		controller.set(key, value);
	}

	public Uni<Void> deleteTO(String key) {
		return controller.del(key);
	}
}
