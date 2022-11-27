<script>
    import Navigation from "./Navigation.svelte";
    import classes from '../data/SylablesClasses.json'

    export let id;
    $: console.log(classes)
    $: class_item = classes.find(p => p.id == id);

</script>

<div>
    <button class="btn-success">{class_item.title}</button>
    <Navigation />
</div>