<script>
    import classes from '../data/SylablesClasses.json'
    import {Link} from "svelte-navigator";
    let list_of_classes = classes
</script>

    {#each list_of_classes as class_item}
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{class_item.title}</h2>
                <div class="card-actions justify-end">
                    <Link class="btn btn-primary" to="/class/{class_item.id}" id="{class_item.id}" title="{class_item.title}">Wybierz</Link>
                </div>
            </div>
        </div>
    {/each}
