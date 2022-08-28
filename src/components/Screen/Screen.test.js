import { expect, describe, it } from 'vitest';
import Screen from '@/components/Screen/Screen.vue';
import { mount, shallowMount } from "@vue/test-utils";


describe("Screen.vue", () => {

  const wrapper = shallowMount(Screen, {
    props: {
      text: 'Message test',
      result: 'Result test' },
  });

  const screen_top = wrapper.find('.screen__top');
  const screen_content = wrapper.find('.screen__content');
  const screen_error = wrapper.find('.screen__error');

  it("Renders properly", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(screen_top.exists()).toBeTruthy();
    expect(screen_content.exists()).toBeTruthy();
    expect(screen_error.exists()).toBeFalsy();
  });

  //cuando reciba un error que lo muestre
});