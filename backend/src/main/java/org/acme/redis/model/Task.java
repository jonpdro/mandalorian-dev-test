package org.acme.redis.model;

import javax.validation.constraints.Size;

public class Task {

	public String key;

	@Size(min = 10)
	public String value;

	public Task(String key, String value) {
		this.key = key;
		this.value = value;
	}

	public Task() {
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}