<template>
    <Select v-model="$i18n.locale">
        <SelectTrigger class="text-background bg-primary" size="sm" id="language">
            <i-ion-language class="  " name="icon" />
        </SelectTrigger>
        <SelectContent position="popper">
            <SelectItem value="en">
                <div class=" flex text-center gap-1 ">
                    <FlagUs1x1 />
                    {{ $t('english') }}
                </div>

            </SelectItem>
            <SelectItem value="ar">

                <div class=" flex text-center gap-1 ">

                    <FlagDz1x1 />
                    {{ $t('arabic') }}
                </div>

            </SelectItem>
        </SelectContent>
    </Select>
</template>

<script setup>
import FlagDz1x1 from '~icons/flag/dz-1x1';
import FlagUs1x1 from '~icons/flag/us-1x1';

</script>
