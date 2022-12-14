import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import PostJob from "../views/PostJob.vue";
import JobsPage from "../views/JobsPage.vue";
import JobDescription from "../views/JobDescription.vue";
import ProfilePage from "../views/ProfilePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpPage,
  },
  {
    path: "/postjob",
    name: "PostJob",
    component: PostJob,
  },
  {
    path: "/jobs",
    name: "JobsPage",
    component: JobsPage,
  },
  {
    path: "/jobs/:job_id",
    name: "JobDescription",
    component: JobDescription,
  },
  {
    path: "/profile/:username",
    name: "ProfilePage",
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
