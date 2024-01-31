<template>
  <div>
    <PageTitle title="Contact." />
    <div class="md:flex space-y-8 md:space-y-0 md:space-x-14">
      <form class="md:w-[50%] space-y-6" @submit.prevent="sendEmail">
        <FormInput v-model="email" name="email" type="email" placeholder="Email" required />
        <FormInput v-model="phoneNumber" name="phoneNumber" placeholder="Phone number" />
        <TextInput v-model="message" rows="3" placeholder="Message..." name="message" />
        <div class="flex items-center space-x-4">
          <PrimaryButton type="submit" value="Send">Submit</PrimaryButton>

          <AppAlert v-if="successAlertVisible" variant="success">
            <template v-slot:body>
              <span class="font-medium">Message sent successfully!</span>
            </template>
          </AppAlert>

          <AppAlert v-if="errorAlertVisible" variant="danger">
            <template v-slot:body>
              <span class="font-medium">
                An error occurred when sending the message. If this doesn't work, please contact us
                by email at dedajfjolla@gmail.com
              </span>
            </template>
          </AppAlert>
        </div>
      </form>
      <div class="box-border md:w-[50%] p-12 border-2 border-black rounded-lg flex items-center">
        <div class="w-full space-y-16">
          <div class="font-semibold text-2xl">Fjolla Dedaj</div>
          <div class="space-y-6">
            <div class="flex items-center space-x-2">
              <IconBadge icon="fa-solid fa-envelope" />
              <div class="font-semibold text-lg">dedajfjolla@gmail.com</div>
            </div>
            <div class="flex items-center space-x-2">
              <IconBadge icon="fa-solid fa-thumbtack" />
              <div class="font-semibold text-lg">Berlin, Germany</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import FormInput from '@/components/FormInput.vue'
import TextInput from '@/components/TextInput.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import IconBadge from '@/components/IconBadge.vue'
import AppAlert from '@/components/AppAlert.vue'
import emailjs from 'emailjs-com'

const email = ref('')
const phoneNumber = ref('')
const message = ref('')
const successAlertVisible = ref(false)
const errorAlertVisible = ref(false)

const showSuccessAlert = () => {
  successAlertVisible.value = true

  setTimeout(() => {
    successAlertVisible.value = false
  }, 3000)
}

const showErrorAlert = () => {
  errorAlertVisible.value = true

  setTimeout(() => {
    errorAlertVisible.value = false
  }, 7000)
}

const resetForm = () => {
  email.value = ''
  phoneNumber.value = ''
  message.value = ''
}

const sendEmail = (e) => {
  try {
    emailjs.sendForm('service_cq30edi', 'template_wm5yn4b', e.target, 'hVxL186YMsbs9d6Se', {
      email: email.value,
      phoneNumber: phoneNumber.value,
      message: message.value
    })
    showSuccessAlert()
    resetForm()
  } catch (error) {
    showErrorAlert()
  }
}
</script>