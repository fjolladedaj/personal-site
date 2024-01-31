<template>
  <div
    class="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
  >
    <TimelineItem icon="fa-solid fa-code" date="Jun. 2019 - Sept. 2019">
      <template v-slot:title>
        <span class="font-extrabold">Mobile and Website Developer Intern:</span> Kutia</template
      >
      <template v-slot:body>
        As an intern at Kutia, I played a key role in developing project "Neat" - an app
        specifically designed for parents to monitor their children's school and extracurricular
        activities. Using React and React Native within an agile development framework, I actively
        contributed to all phases of the software development life cycle, from coding to testing.
      </template>
    </TimelineItem>

    <TimelineItem icon="fa-solid fa-chalkboard-user" date="Feb. 2020 - May 2020">
      <template v-slot:title>
        <span class="font-extrabold">Teaching Assistant:</span> Algorithms and Data Structures
      </template>
      <template v-slot:body>
        As an undergraduate teaching assistant for the course Algorithms and Data Structures at
        Jacobs University Bremen, I led tutorials, graded homework, and provided constructive
        feedback to students. These responsibilities not only enriched the educational experience
        but also refined my communication and mentoring skills.
      </template>
    </TimelineItem>

    <TimelineItem icon="fa-solid fa-graduation-cap" date="2018 - 2021">
      <template v-slot:title>
        <span class="font-extrabold">Bachelor's in Computer Science:</span> Jacobs University Bremen
      </template>
      <template v-slot:body>
        As a Computer Science student, my Bachelor's thesis focused on Computer Graphics, exploring
        the development of an "Omnidirectional Stereo Camera with Ray Tracing". This research
        deepened my understanding of advanced imaging technology and honed my skills in tackling
        innovative challenges within the field.
        <br />
        Courses: Artificial Intelligence, Computer Architecture and Programming Languages, Computer
        Graphics, Databases and Web Services, Formal Languages and Logic, Operating Systems, Machine
        Learning, Computer Networks, Secure and Dependable Systems, Software Engineering, and more.
      </template>
    </TimelineItem>

    <TimelineItem icon="fa-solid fa-code" date="Jul. 2020 - Sept. 2021">
      <template v-slot:title>
        <span class="font-extrabold">Software Engineering Intern & Working Student:</span> Comgy
      </template>
      <template v-slot:body>
        As an intern and working student at Comgy, I actively contributed to the end-to-end
        development of multiple software projects, with a primary focus on visualizing consumption
        data for tenants. Additionally, I worked on the maintenance of applications, engaging in
        hands-on debugging and resolving bugs.
      </template>
    </TimelineItem>

    <TimelineItem icon="fa-solid fa-code" date="Sept. 2021 - Dec. 2023">
      <template v-slot:title>
        <span class="font-extrabold">Frontent Developer:</span> Comgy
      </template>
      <template v-slot:body>
        As a key member of the Frontend team at Comgy, I led Vue-based projects, demonstrating
        expertise in software architecture and problem-solving. Following the Shape Up methodology,
        I guided projects from start to finish, translating requirements into actionable tasks. I
        also played a pivotal role in the developer hiring process, evaluating code challenges. In
        project coordination, I facilitated a smooth transition from Vuetify to Tailwind, enhancing
        the user interface. Additionally, I contributed to an innovative project developing a
        library for drawing lines between elements.
      </template>
    </TimelineItem>
  </div>
</template>

<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
</script>
