import { expect, describe, it } from 'vitest';
import Board from '@/components/Board/Board.vue';
import { mount } from "@vue/test-utils";
import { isSVGTag } from '@vue/shared';


describe("Board.vue", () => {

  let wrapper = mount(Board);

  const button = wrapper.find('.button');

  it("Renders properly", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(button.exists()).toBeTruthy();
  });

  it("detects that method was called", async () => {
    wrapper.vm.$emit('executeFunction', "=");
    await wrapper.vm.$nextTick(); // Wait until $emits have been handled

    expect(wrapper.emitted().executeFunction).toBeTruthy();
  });

  it('create calculator board', () => {
    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(18)
  })

  it("check the emits", async () => {
    wrapper.vm.$emit('clearResult');
    wrapper.vm.$emit('calcResult');
    wrapper.vm.$emit('collectValue', '4');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().clearResult).toBeTruthy();
    expect(wrapper.emitted().calcResult).toBeTruthy();
    expect(wrapper.emitted().collectValue[0]).toEqual(["4"])

  });

});