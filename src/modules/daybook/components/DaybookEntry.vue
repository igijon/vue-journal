<template>
    <div
        class="entry-container mb-3 pointer p-2"
    >
        <!-- Title -->
        <div 
            class="entry-title d-flex"
        >
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2022, jueves</span>
        </div>

        <div class="entry-description">
            Laborum et labore occaecat ipsum veniam culpa nisi laborum esse Lorem. Minim consequat velit sit velit aliquip officia dolore aliquip irure excepteur. Officia laborum id laborum eiusmod. Nostrud sunt officia sint veniam quis qui cillum.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description {
        font-size: 12px;
    }
}

</style>