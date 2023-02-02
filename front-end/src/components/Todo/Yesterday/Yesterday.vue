<template>
  <div class="today__div__big">
    <div class="today__title">
      <h1>Today</h1>
      <p>4/6 completed</p>
    </div>
    <div class="today__tasks">
      <div class="task df" v-for="task in tasks" :key="task.id">
        <div class="round">
          <input type="checkbox" :id="task.id" v-model="task.completed" />
          <label :for="task.id"></label>
        </div>
        <div class="task__text__crud df_jscpb_ai">
          <div class="task__text">
            <h2>
              {{task.title}}
            </h2>
            <p>
              {{task.description}}
            </p>
          </div>
          <div class="task__crud df">
            <div class="task__edit">
              <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.1908 3.1525C25.3426 3.3048 25.4279 3.51108 25.4279 3.72612C25.4279 3.94117 25.3426 4.14745 25.1908 4.29975L23.4959 5.99625L20.2459 2.74625L21.9408 1.04975C22.0931 0.897428 22.2998 0.811859 22.5152 0.811859C22.7307 0.811859 22.9373 0.897428 23.0896 1.04975L25.1908 3.15087V3.1525ZM22.347 7.1435L19.097 3.8935L8.0259 14.9662C7.93647 15.0557 7.86914 15.1647 7.82928 15.2847L6.52115 19.2075C6.49743 19.279 6.49406 19.3557 6.51142 19.429C6.52879 19.5024 6.5662 19.5694 6.61948 19.6227C6.67275 19.676 6.7398 19.7134 6.81312 19.7307C6.88644 19.7481 6.96314 19.7447 7.03465 19.721L10.9574 18.4129C11.0773 18.3735 11.1863 18.3067 11.2759 18.2179L22.347 7.14512V7.1435Z" fill="#8E8E8E"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.625 21.9375C1.625 22.584 1.88181 23.204 2.33893 23.6611C2.79605 24.1182 3.41603 24.375 4.0625 24.375H21.9375C22.584 24.375 23.204 24.1182 23.6611 23.6611C24.1182 23.204 24.375 22.584 24.375 21.9375V12.1875C24.375 11.972 24.2894 11.7653 24.137 11.613C23.9847 11.4606 23.778 11.375 23.5625 11.375C23.347 11.375 23.1403 11.4606 22.988 11.613C22.8356 11.7653 22.75 11.972 22.75 12.1875V21.9375C22.75 22.153 22.6644 22.3597 22.512 22.512C22.3597 22.6644 22.153 22.75 21.9375 22.75H4.0625C3.84701 22.75 3.64035 22.6644 3.48798 22.512C3.3356 22.3597 3.25 22.153 3.25 21.9375V4.0625C3.25 3.84701 3.3356 3.64035 3.48798 3.48798C3.64035 3.3356 3.84701 3.25 4.0625 3.25H14.625C14.8405 3.25 15.0472 3.1644 15.1995 3.01202C15.3519 2.85965 15.4375 2.65299 15.4375 2.4375C15.4375 2.22201 15.3519 2.01535 15.1995 1.86298C15.0472 1.7106 14.8405 1.625 14.625 1.625H4.0625C3.41603 1.625 2.79605 1.88181 2.33893 2.33893C1.88181 2.79605 1.625 3.41603 1.625 4.0625V21.9375Z" fill="#8E8E8E"/>
              </svg>
            </div>
            <div class="task__delete">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_144_128)">
                  <path d="M2.8125 1.125C2.51413 1.125 2.22798 1.24353 2.017 1.4545C1.80603 1.66548 1.6875 1.95163 1.6875 2.25V3.375C1.6875 3.67337 1.80603 3.95952 2.017 4.1705C2.22798 4.38147 2.51413 4.5 2.8125 4.5H3.375V14.625C3.375 15.2217 3.61205 15.794 4.03401 16.216C4.45597 16.6379 5.02826 16.875 5.625 16.875H12.375C12.9717 16.875 13.544 16.6379 13.966 16.216C14.3879 15.794 14.625 15.2217 14.625 14.625V4.5H15.1875C15.4859 4.5 15.772 4.38147 15.983 4.1705C16.194 3.95952 16.3125 3.67337 16.3125 3.375V2.25C16.3125 1.95163 16.194 1.66548 15.983 1.4545C15.772 1.24353 15.4859 1.125 15.1875 1.125H11.25C11.25 0.826631 11.1315 0.540483 10.9205 0.329505C10.7095 0.118526 10.4234 0 10.125 0L7.875 0C7.57663 0 7.29048 0.118526 7.0795 0.329505C6.86853 0.540483 6.75 0.826631 6.75 1.125H2.8125ZM6.1875 5.625C6.33668 5.625 6.47976 5.68426 6.58525 5.78975C6.69074 5.89524 6.75 6.03832 6.75 6.1875V14.0625C6.75 14.2117 6.69074 14.3548 6.58525 14.4602C6.47976 14.5657 6.33668 14.625 6.1875 14.625C6.03832 14.625 5.89524 14.5657 5.78975 14.4602C5.68426 14.3548 5.625 14.2117 5.625 14.0625V6.1875C5.625 6.03832 5.68426 5.89524 5.78975 5.78975C5.89524 5.68426 6.03832 5.625 6.1875 5.625ZM9 5.625C9.14918 5.625 9.29226 5.68426 9.39775 5.78975C9.50324 5.89524 9.5625 6.03832 9.5625 6.1875V14.0625C9.5625 14.2117 9.50324 14.3548 9.39775 14.4602C9.29226 14.5657 9.14918 14.625 9 14.625C8.85082 14.625 8.70774 14.5657 8.60225 14.4602C8.49676 14.3548 8.4375 14.2117 8.4375 14.0625V6.1875C8.4375 6.03832 8.49676 5.89524 8.60225 5.78975C8.70774 5.68426 8.85082 5.625 9 5.625ZM12.375 6.1875V14.0625C12.375 14.2117 12.3157 14.3548 12.2102 14.4602C12.1048 14.5657 11.9617 14.625 11.8125 14.625C11.6633 14.625 11.5202 14.5657 11.4148 14.4602C11.3093 14.3548 11.25 14.2117 11.25 14.0625V6.1875C11.25 6.03832 11.3093 5.89524 11.4148 5.78975C11.5202 5.68426 11.6633 5.625 11.8125 5.625C11.9617 5.625 12.1048 5.68426 12.2102 5.78975C12.3157 5.89524 12.375 6.03832 12.375 6.1875Z" fill="#8E8E8E"/>
                </g>
                <defs>
                  <clipPath id="clip0_144_128">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="today__add__tasks__div">
      <div class="today__add__tasks df_ai" v-if="!this.addNewTaskVariable" @click="addNewTaskText()">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 26.25C20.7655 26.25 26.25 20.7655 26.25 14C26.25 7.2345 20.7655 1.75 14 1.75C7.2345 1.75 1.75 7.2345 1.75 14C1.75 20.7655 7.2345 26.25 14 26.25ZM13.125 9.625C13.125 9.39294 13.2172 9.17038 13.3813 9.00628C13.5454 8.84219 13.7679 8.75 14 8.75C14.2321 8.75 14.4546 8.84219 14.6187 9.00628C14.7828 9.17038 14.875 9.39294 14.875 9.625V13.125H18.375C18.6071 13.125 18.8296 13.2172 18.9937 13.3813C19.1578 13.5454 19.25 13.7679 19.25 14C19.25 14.2321 19.1578 14.4546 18.9937 14.6187C18.8296 14.7828 18.6071 14.875 18.375 14.875H14.875V18.375C14.875 18.6071 14.7828 18.8296 14.6187 18.9937C14.4546 19.1578 14.2321 19.25 14 19.25C13.7679 19.25 13.5454 19.1578 13.3813 18.9937C13.2172 18.8296 13.125 18.6071 13.125 18.375V14.875H9.625C9.39294 14.875 9.17038 14.7828 9.00628 14.6187C8.84219 14.4546 8.75 14.2321 8.75 14C8.75 13.7679 8.84219 13.5454 9.00628 13.3813C9.17038 13.2172 9.39294 13.125 9.625 13.125H13.125V9.625Z" fill="#FF4F5A"/>
        </svg>
        <p>Add task</p>
      </div>
      <div class="today__add__div df_jscend_ai" v-if="this.addNewTaskVariable">
        <input type="text" placeholder="Task title" class="today__add__input" v-model="this.newTask.title">
        <input type="text" placeholder="Description" class="today__add__textarea__input" v-model="this.newTask.description">
        <div>
          <button class="apply" @click="addNewTask">Add</button>
          <button class="cancel" @click="this.addNewTaskVariable === false">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./Yesterday.css"
export default {
  name: "Yesterday",
  data(){
    return{
      addNewTaskVariable: false,
      newTask: {
        id: new Date(),
        title: '',
        description: '',
        completed: false
      },
      tasks: [
        {
          id: 1,
          title: "Cooking a salmon sushi",
          description: 'Salmon and tuna i think is good for dinner, i wanna make it today :D Salmon and tuna i think is good for dinner, i wanna make it today :D Salmon and tuna i think is good for dinner, i wanna make it today :D',
          completed: true,
        },
        {
          id: 2,
          title: "Cooking a salmon sushi",
          description: 'Salmon and tuna i think is good for dinner, i wanna make it today :D',
          completed: false,
        },
        {
          id: 3,
          title: "Cooking a salmon sushi",
          description: 'Salmon and tuna i think is good for dinner, i wanna make it today :D',
          completed: false,
        },
        {
          id: 4,
          title: "Cooking a salmon sushi",
          description: 'Salmon and tuna i think is good for dinner, i wanna make it today :D',
          completed: false,
        },
        {
          id: 5,
          title: "Cooking a salmon sushi",
          description: 'Salmon and tuna i think is good for dinner, i wanna make it today :D',
          completed: false,
        },
      ]
    }
  },
  methods: {
    addNewTaskText(){
      this.addNewTaskVariable = true
    },
    addNewTask() {
      this.tasks.push(this.newTask)
      this.newTask = {
        id: new Date(),
        title: '',
        description: '',
        completed: false
      }
    }
  }
}
</script>

<style scoped>

</style>