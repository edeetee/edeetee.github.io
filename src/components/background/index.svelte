<script lang="ts">
    import { onMount } from 'svelte';
    import {FeedbackRenderer} from './renderer'
    import {constrain} from '@src/util/constrain'
    
    let canvas: HTMLCanvasElement
    const RES_MULTIPLIER = 0.5

    onMount(() => {
        let glContext = canvas.getContext('webgl')

        if(glContext == null)
            throw Error("No valid webgl context")

        let renderer = FeedbackRenderer(glContext)

        function updateSize(){
            if(canvas && glContext){
                canvas.width = window.innerWidth*RES_MULTIPLIER
                canvas.height = window.innerHeight*RES_MULTIPLIER
                glContext.viewport(0,0, canvas.width, canvas.height)
            }
        }

        window.addEventListener("resize", updateSize)
        updateSize()

        function updateMouse(pageX: number, pageY: number){
            const x = constrain((pageX-window.scrollX)/window.innerWidth, 0, 1)
            const y = constrain(1-(pageY-window.scrollY)/window.innerHeight, 0, 1)

            renderer.onMove(x, y)
        }
    
        document.body.addEventListener("touchmove", ev => updateMouse(ev.touches[0].pageX, ev.touches[0].pageY))
        document.body.addEventListener("mousemove", ev => updateMouse(ev.pageX, ev.pageY))
    })
</script>

<canvas id="background" bind:this={canvas} />

<style>
    #background {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
    }
</style>