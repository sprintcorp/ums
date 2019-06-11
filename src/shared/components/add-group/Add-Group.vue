<template>
    <div>
        <div class="offset-area" :class=" { show_hide : toggleAdd }">
        <div class="offset-close" @click="toggleClose"><i class="ti-close"></i></div>
        <h3 class="text-center mt-5">Add Group</h3>
        <div class="offset-content tab-content">
            <div id="activity" class="tab-pane fade in show active">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                 
                </div>
                  <div class="form-group">
                    <label for="">Permission</label>
                    <input-tag v-model="tags" value="" ></input-tag>
                  </div>
                  <div class="form-group">
                    <label for=""></label>
                    <textarea class="form-control" name="" id="" rows="6"></textarea>
                  </div>
                   
                <button type="button" class="btn btn-primary btn-block">Add Group</button>
            </div>

        </div>
    </div>
    </div>
</template>

<script src="./add-group.js"></script>
<style scoped>@import url('./add-group.css');</style>
