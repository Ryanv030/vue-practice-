<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label for="username">username</label>
                  <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="text" class="form-control" v-model="user.email">
                </div>
                <input type="text" v-model="node" class="form-control">
                <button type="button" class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
                </ul>
            </div>
        </div> 
      <multiselect v-model="selected" :options="options" :multiple="true"></multiselect>
    </div>


</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data",
      selected: null,
      options: ["choose", "an", "option"]
    };
  },
  components: { Multiselect },
  methods: {
    submit() {
      // this.user.username = "";
      // this.user.email = "";
      // this.$http.post("", this.user).then(response => {
      //   console.log(response);
      // });
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    fetchData() {
      // this.$http
      //   .get("data.json")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     console.log(data);
      //     const resultArray = [];
      //     for (let key in data) {
      //       resultArray.push(data[key]);
      //     }
      //     console.log(resultArray);
      //     this.users = resultArray;
      //   });
      this.resource
        .getData({ node: this.node })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          console.log(resultArray);
          this.users = resultArray;
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

 <style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>


.multiselect__tags {
  padding: 10px 40px 0 10px;
}

.multiselect__tag {
  background-color: #fafaf9;
  color: #868682;
  border: 1px solid #e0e0d9;
  border-radius: 4px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  font-size: 16px;
}

.multiselect__tag-icon {
  margin: 0;
}

.multiselect__tag-icon:after {
  color: rgb(233, 0, 0);
}


 <div class="spacing">
      <h2 class="timeline_filter__header">Tags</h2>
      <multiselect
      v-model="selected"
      :options="options"
      :close-on-select="false"
      :multiple="true"
      ></multiselect>
    </div>

    import Multiselect from "vue-multiselect";