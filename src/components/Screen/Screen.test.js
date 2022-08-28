import { expect, describe, it } from 'vitest';
import Screen from '@/components/Screen/Screen.vue';
import { mount, shallowMount } from "@vue/test-utils";


describe("Screen.vue", () => {

  let wrapper = shallowMount(Screen, {
    props: {
      text: 'Message test',
      result: 'Result test',
      error: '' },
  });

  const screen_top = wrapper.find('.screen__top');
  const screen_content = wrapper.find('.screen__content');
  let screen_error = wrapper.find('.screen__error');

  it("Renders properly", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(screen_top.exists()).toBeTruthy();
    expect(screen_content.exists()).toBeTruthy();
    expect(screen_error.exists()).toBeFalsy();
  });

  it("Error is showed", () => {
    wrapper = shallowMount(Screen, {
      props: {
        text: 'Message test',
        result: 'Result test',
        error: 'Error test' },
    });
    screen_error = wrapper.find('.screen__error');
    expect(screen_error.text()).toContain("Error test");
  });
});