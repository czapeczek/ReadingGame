<script>
    // import Navigation from "./Navigation.svelte";
    import classes from '../data/SylablesClasses.json'
    import conf from  '../data/AppConfiguration.json'
    import { results } from '../data/ResultsStore.js'

    export let location
    export let navigate

    let number_of_classes = classes.length
    let current_step = 0
    let repeated_count = 0
    let seconds_from_start = 0

    const increment = () => {
        $results.good = $results.good+1
    }

    const decrement = () => {
        $results.bad = $results.bad+1
    }

    export let id
    $: class_item = classes.find(p => p.id == id)

    function increment_step() {
        if (conf.repeat.repeat_based === true) {
            current_step++
            if(current_step === class_item.steps.length) {
                current_step = 0
                repeated_count++
            }
            if (conf.repeat.repeats == repeated_count) {
                repeated_count = 0
                let new_id = Number(id) + 1
                console.log(new_id)
                if (new_id > number_of_classes) {
                    console.log('here')
                    navigate('/')

                } else {
                    navigate('/class/' + new_id)
                }
            }
        }
    }

    function pass() {
        increment()
        increment_step()
    }

    function repel() {
        decrement()
        increment_step()
    }


</script>

    <div class="card w-96 bg-primary text-primary-content rounded-3xl">
        <div class="card-body">
            <p class="card-title text-8xl self-center">{class_item.steps[current_step]}</p>
       </div>
    </div>
<!--    <Navigation />-->
    <div class="btm-nav">
        <button on:click={pass} class="bg-success text-primary">
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
            </svg>    </button>
        <button on:click={repel} class="bg-error text-primary">
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
            </svg>    </button>
    </div>
