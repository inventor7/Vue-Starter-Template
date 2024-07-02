<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline">
                <icon-tdesign-mode-dark
                    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <icon-tdesign-mode-light
                    class="absolute text-white h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem @click="mode = 'light'">
                Light
            </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'dark'">
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'auto'">
                System
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup>
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
</script>
