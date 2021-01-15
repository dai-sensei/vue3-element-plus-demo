<template>
  <div id="title">
    Form
  </div>
  <div id="form">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-width="200px"
    >
      <el-form-item
        label="個数"
        prop="count"
      >
        <el-input-number
          v-model="formData.count"
          :min="1"
          :max="10"
        />
      </el-form-item>
      <el-form-item
        label="テキスト"
        prop="text"
      >
        <el-input v-model="formData.text" />
      </el-form-item>
      <el-form-item
        label="メッセージ"
        prop="message"
      >
        <el-input
          v-model="formData.message"
          type="textarea"
          :rows="3"
        />
      </el-form-item>
      <el-form-item
        label="日時"
        prop="datetime"
      >
        <el-date-picker
          v-model="formData.datetime"
          type="datetime"
        />
      </el-form-item>
      <el-form-item
        label="チェックボックス"
        prop="checkbox"
      >
        <el-checkbox-group v-model="formData.checkbox">
          <el-checkbox label="Item A" />
          <el-checkbox label="Item B" />
          <el-checkbox label="Item C" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="チェックボックス(ボタン)"
        prop="checkbox"
      >
        <el-checkbox-group v-model="formData.checkbox">
          <el-checkbox-button label="Item A" />
          <el-checkbox-button label="Item B" />
          <el-checkbox-button label="Item C" />
        </el-checkbox-group>
      </el-form-item>

      <el-form-item
        label="ラジオボタン"
        prop="radio"
      >
        <el-radio-group v-model="formData.radio">
          <el-radio label="ラジオ1" />
          <el-radio label="ラジオ2" />
          <el-radio label="ラジオ3" />
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div id="action-buttons">
      <el-button @click="formRef.resetFields()">
        クリア
      </el-button>
      <el-button @click="submit">
        送信
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, onMounted} from 'vue';
import { ElMessage } from 'element-plus';

interface Data {
  count: number;
  text: string | null;
  message: string | null;
  datetime: Date | null;
  checkbox: Array<string>;
  radio: string | null;
}

export default defineComponent({
  name: "Form",
  setup() {
    const formRef = ref<HTMLFormElement>();
    const formData = reactive<Data>({
      count: 1,
      text: null,
      message: null,
      datetime: null,
      checkbox: new Array<string>(),
      radio: null
    });
    const rules = {
      count: [
        { required: true, message: '必須項目です' },
        { type: 'number', max: 10, min: 1, message: '1 ～ 10までの値を設定してください' },
      ],
      text: [
        { required: true, message: '必須項目です' },
      ],
      message: [
        { required: true, message: '必須項目です' },
      ],
      dateTime: [
        { required: true, message: '必須項目です' },
      ],
      radio: [
        { required: true, message: '必須項目です' },
      ]
    };

    function submit() {
      if (formRef.value) {
        formRef.value.validate((valid: boolean) => {
          if (valid) {
            ElMessage({
              type: 'success',
              showClose: true,
              message: 'submit!!'
            });
          } else {
            ElMessage({
              type: 'error',
              showClose: true,
              message: 'not submit'
            });
          }
        });
      }
    }

    return {
      formRef,
      formData,
      rules,
      submit
    };
  },
});
</script>

<style scoped>
#title {
  font-size: 1.25rem;
  font-weight: bold;
}
#form {
  text-align: start;
}
#action-buttons {
  text-align: center;
}
</style>
