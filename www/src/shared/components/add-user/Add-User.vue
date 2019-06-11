<template>
    <div>
        <div class="offset-area" :class=" { show_hide : toggleAdd }"  >
            <div class="offset-close" @click="toggleClose"><i class="ti-close"></i></div>
            <h3 class="text-center mt-5">Add User</h3>
            <div class="offset-content tab-content">
                <div id="activity" class="tab-pane fade in show active">
                    <div class="form-group">
                        <label for="">Surname</label>
                        <input type="text"
                               class="form-control" name="" id="" aria-describedby="helpId" placeholder="Surname">
                    </div>
                    <div class="form-group">
                        <label for="">MiddleName</label>
                        <input type="text"
                               class="form-control" name="" id="" aria-describedby="helpId" placeholder="Middle Name">
                    </div>
                    <div class="form-group">
                        <label for="">Other Name</label>
                        <input type="text"
                               class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                               value="Other Name">
                    </div>
                    <div class="form-group">
                        <label for="">Gender</label>
                        <select name="" id="" class="form-control">
                            <option value="" selected disabled>Choose Gender...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email"
                               class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                               value="xyz@email.com">
                    </div>
                    <div class="form-group">
                        <label for="">Role</label>
                        <select name="" id="" class="form-control">
                            <option value="User">User</option>
                            <option value="User">Admin</option>
                        </select>
                    </div>

                        <div class="form-group">
                            <label for="">Group</label>
                            <input-tag v-model="tags" ></input-tag>
                        </div>
                    <button type="button" class="btn btn-primary btn-block">Add User</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script src="./add-user.js"></script>
<style scoped>@import url('./add-user.css');</style>
