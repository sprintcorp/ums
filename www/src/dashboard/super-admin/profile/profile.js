import { getUserData } from '../../../utils/cache';
export default {
 name: "profile",
 data() {
  return {
   loading: false,
   errors: null,
   username: null,
   password: null
  };
 },
 methods: {
  switchToRegister() {
   this.$emit("switchPage", "register");
  },
  onSubmit(username, password) {
   if(this.loading) return; // Prevent overlapping requests.

   this.loading = true;
   this.$store
       .dispatch(LOGIN, {username, password})
       .then(() => this.$router.push({name: "userDashboard"}))
       .catch(error => {
        this.loading = false;
        alert(error.error)
       });
  }
 },/*
    computed: {
        // ...mapState({
        //   errors: state => state.auth.errors
        // })
    // }*/
};
