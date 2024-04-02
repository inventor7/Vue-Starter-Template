<template>
        <ClientLayout>



                <Card class="w-[350px]">
                        <CardHeader>
                                <icon-mdi-account-box style="font-size: 2em;" class=" text-primary" />

                                <CardTitle>{{ $t('create_new_project') }}</CardTitle>
                                <CardDescription>{{ $t('deploy_project') }}.</CardDescription>
                        </CardHeader>
                        <CardContent>
                                <form>
                                        <div class="grid items-center w-full gap-4">
                                                <div class="flex flex-col space-y-1.5">
                                                        <Label for="name">{{ $t('name') }}</Label>
                                                        <Input id="name" placeholder="Name of your project" />
                                                </div>
                                                <div class="flex flex-col space-y-1.5">
                                                        <Label for="language">{{ $t('language') }}</Label>
                                                        <Select v-model="$i18n.locale">
                                                                <SelectTrigger id="language">
                                                                        <SelectValue placeholder="Select" />
                                                                </SelectTrigger>
                                                                <SelectContent position="popper">
                                                                        <SelectItem value="en">
                                                                                {{ $t('english') }}
                                                                        </SelectItem>
                                                                        <SelectItem value="ar">
                                                                                {{ $t('arabic') }}
                                                                        </SelectItem>
                                                                </SelectContent>
                                                        </Select>
                                                </div>
                                        </div>
                                </form>
                        </CardContent>
                        <CardFooter class="flex justify-between px-6 pb-6">
                                <Button variant="outline">
                                        {{ $t('cancel') }}
                                </Button>
                                <Button>
                                        {{ $t('deploy') }}
                                </Button>
                        </CardFooter>
                </Card>




        </ClientLayout>
</template>

<script setup>
import { useMeta } from 'vue-meta'

useMeta({
        title: 'Home sweet home'
})


</script>