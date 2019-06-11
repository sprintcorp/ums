<template>
    <div>
        <div class="offset-area" :class=" { show_hide : toggleEdit }">
        <div class="offset-close" @click="toggleClose"><i class="ti-close"></i></div>
        <h3 class="text-center mt-5">Edit Group</h3>
        <div class="offset-content tab-content">
            <div id="activity" class="tab-pane fade in show active">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value="Family &amp; Friends">
                 
                </div>
                  <div class="form-group">
                    <label for="">Permission</label>
                    <input-tag v-model="tags" ></input-tag>
                  </div>
                  <div class="form-group">
                    <label for=""></label>
                    <textarea class="form-control" name="" id="" rows="6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis illum et architecto beatae! Quibusdam quae cum amet, voluptatem perspiciatis ipsam.</textarea>
                  </div>
                   
                <button type="button" class="btn btn-primary btn-block">Update Group</button>
            </div>

        </div>
    </div>
    </div>
</template>

<script src="./edit-group.js"></script>
<style scoped>@import url('./edit-group.css');</style>
