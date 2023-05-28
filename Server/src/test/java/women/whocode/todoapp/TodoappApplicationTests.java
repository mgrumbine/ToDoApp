package women.whocode.todoapp;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.springframework.boot.test.context.SpringBootTest;
import women.whocode.todoapp.models.Task;
import women.whocode.todoapp.models.User;

import static junit.framework.Assert.assertEquals;

@RunWith(JUnit4.class)
class TodoappApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void testUserConstructor(){
		User testUser = new User("testName", "testPassword", "testEmail", "testPhone");
		assertEquals(0, testUser.getId());
		assertEquals("testName", testUser.getUsername());
		assertEquals("testPassword", testUser.getPassword());
		assertEquals("testEmail", testUser.getEmail());
		assertEquals("testPhone", testUser.getPhoneNumber());
	}

	@Test
	void testTaskConstructor(){
		User testUser = new User("testName", "testPassword", "testEmail", "testPhone");
		Task testTask = new Task(testUser, "wash clothes", 2, "cleaning", "don't machine dry sweater");
		assertEquals("testName", testUser.getUsername());
		assertEquals("wash clothes", testTask.getActivity());
		assertEquals(2, testTask.getAccessibility());
		assertEquals("cleaning", testTask.getType());
		assertEquals("don't machine dry sweater", testTask.getNotes());
		assertEquals(null, null);
	}
}
