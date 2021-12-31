package org.acme.controller;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;

import org.acme.service.TaskService;

import io.smallrye.mutiny.Uni;

@Singleton
public class TaskController {

	@Inject
	TaskService service;

	public Uni<List<String>> getAllKeys() {
		return service.keys();
	}

	public String getKey(String key) {
		return service.get(key);
	}

	public void insertTO(String key, String value) {
		service.set(key, value);
	}

	public Uni<Void> deleteTO(String key) {
		return service.del(key);
	}

}
