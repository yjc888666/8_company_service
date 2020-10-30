<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="center">
     <a-form-item label="广告名称" v-bind="validateInfos.name" >
      <a-input v-model:value="modelRef.name" />
    </a-form-item>
    <a-form-item label="开始日期" v-bind="validateInfos['sub.name']">
      <a-date-picker
        v-model:value="modelRef.startValue"
        :locale="modelRef.locale"
         show-time
         format="YYYY-MM-DD HH:mm:ss"
          placeholder="请选择开始日期"
        @openChange="handleStartOpenChange"
       />
    </a-form-item>
     <a-form-item label="结束日期" v-bind="validateInfos['sub.name']">
     <a-date-picker
        v-model:value="modelRef.endValue"
        :locale="modelRef.locale"
         show-time
         format="YYYY-MM-DD HH:mm:ss"
          placeholder="请选择结束日期"
        @openChange="handleEndOpenChange"
       />
    </a-form-item>
     <a-form-item label="广告链接" v-bind="validateInfos['sub.name']">
      <a-input v-model:value="modelRef.sub.name" />
    </a-form-item>
     <a-form-item label="广告图片" v-bind="validateInfos['sub.name']">
      <a-input v-model:value="modelRef.sub.name" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;" @click="reset">
        Reset
      </a-button>
    </a-form-item>
    </div>
    
  </a-form>
</template>
<script>
import { reactive, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
export default {
  name:'form',
  setup() {
    const modelRef = reactive({
      name: '',
      sub: {
        name: '',
      },
      startValue: null,
      endValue: null,
      endOpen: false,
       locale
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: 'Please input name',
          },
        ],
        'sub.name': [
          {
            required: true,
            message: 'Please input sub name',
          },
        ],
      }),
    ); 

      const handleStartOpenChange =  open=>{
        if(!open){
          modelRef.endOpen=true
        }
      };
       
     
      const handleEndOpenChange =  open=>{
          modelRef.endOpen=open
      };
       
    const onSubmit = e => {
      e.preventDefault();
      validate()
        .then(res => {
          console.log(res, toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const reset = () => {
      resetFields();
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
      handleStartOpenChange,
      handleEndOpenChange
    };
  },
};
</script>
<style scoped>

</style>