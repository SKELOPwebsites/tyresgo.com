import { mergeProps, useSSRContext, ref, watch, withCtx, createVNode, openBlock, createBlock, toDisplayString, unref, createTextVNode, createCommentVNode, withModifiers, withDirectives, vModelText, Fragment, renderList, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { Link, Head, useForm, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$k = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-screen 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] max-w-xl lg:px-0 px-2" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Container.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Container = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$j = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-300 pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Content.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Content = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$i = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-full overflow-hidden" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<button class="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center w-[15%] p-0 text-white text-center bg-none border-0 outline-0 opacity-50 hover:opacity-100 transition duration-150 ease"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button><button class="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-[15%] p-0 text-white text-center bg-none border-0 outline-0 opacity-50 hover:opacity-100 transition duration-150 ease"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Carousel/Carousel.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$1]]);
const CarouselSlide_vue_vue_type_style_index_0_scoped_97526194_lang = "";
const _sfc_main$h = {
  __name: "CarouselSlide",
  __ssrInlineRender: true,
  props: {
    visibleSlide: Number,
    index: Number,
    direction: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.visibleSlide === __props.index ? null : { display: "none" },
        class: "absolute inset-0"
      }, _attrs))} data-v-97526194>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Carousel/CarouselSlide.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const CarouselSlide = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-97526194"]]);
const slidesLen = 9;
const interval = 400;
const _sfc_main$g = {
  __name: "MainCarousel",
  __ssrInlineRender: true,
  props: {
    location: {
      type: String,
      required: false,
      default: null
    }
  },
  setup(__props) {
    const isSliding = ref(false);
    const visibleSlide = ref(0);
    const direction = ref("left");
    const slideTimer = ref(interval);
    const isPaused = ref(false);
    watch(slideTimer, () => {
      if (slideTimer.value <= 0) {
        slideTimer.value = interval;
        next();
      } else if (!isPaused.value) {
        setTimeout(() => {
          slideTimer.value--;
        }, 1);
      }
    }, { immediate: true });
    function next() {
      if (isSliding.value)
        return;
      if (visibleSlide.value >= slidesLen - 1) {
        visibleSlide.value = 0;
      } else {
        visibleSlide.value += 1;
      }
      direction.value = "left";
      setSliding();
    }
    function prev() {
      if (isSliding.value)
        return;
      if (visibleSlide.value <= 0) {
        visibleSlide.value = slidesLen - 1;
      } else {
        visibleSlide.value--;
      }
      direction.value = "right";
      setSliding();
    }
    function setSliding() {
      isSliding.value = true;
      setTimeout(() => {
        isSliding.value = false;
      }, 600);
    }
    function pause() {
      isPaused.value = true;
    }
    function unpause() {
      isPaused.value = false;
      slideTimer.value--;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative md:h-full sm:h-[300px] h-[200px]" }, _attrs))}><div class="bg-black h-full">`);
      _push(ssrRenderComponent(Carousel, {
        onNext: next,
        onPrev: prev,
        onMouseenter: pause,
        onMouseleave: unpause
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 0,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-1.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Tyres Anywhere LTD Mobile Tyres Van"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId2}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-1.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Tyres Anywhere LTD Mobile Tyres Van"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 1,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}>`);
                  if (!__props.location) {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Fitting</h1>`);
                  } else {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                  }
                  _push3(`<p class="sm:text-sm text-xs text-center"${_scopeId2}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      !__props.location ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                        key: 1,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 2,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-3.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" class="object-cover object-center w-full h-full brightness-[0.6]"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}>`);
                  if (!__props.location) {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>30-60 Minute Response</h1>`);
                  } else {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                  }
                  _push3(`<p class="sm:text-sm text-xs text-center"${_scopeId2}>Maximum 30-60 minute response for emergencies.</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-3.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w",
                      alt: "Mobile tyre puncture repair",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      class: "object-cover object-center w-full h-full brightness-[0.6]"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      !__props.location ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                        key: 1,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 3,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-4.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Tyres Anywhere LTD Mobile Tyres Van"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId2}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-4.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Tyres Anywhere LTD Mobile Tyres Van"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 4,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-5.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}>`);
                  if (!__props.location) {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Fitting</h1>`);
                  } else {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                  }
                  _push3(`<p class="sm:text-sm text-xs text-center"${_scopeId2}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-5.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      !__props.location ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                        key: 1,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 5,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" class="object-cover object-center w-full h-full brightness-[0.6]"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}>`);
                  if (!__props.location) {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>30-60 Minute Response</h1>`);
                  } else {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                  }
                  _push3(`<p class="sm:text-sm text-xs text-center"${_scopeId2}>Maximum 30-60 minute response for emergencies.</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                      alt: "Mobile tyre puncture repair",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      class: "object-cover object-center w-full h-full brightness-[0.6]"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      !__props.location ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                        key: 1,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 6,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-7.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Tyres Anywhere LTD Mobile Tyres Van"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>We Come To You!</h1><p class="sm:text-sm text-xs text-center"${_scopeId2}>Our mobile tyre fitting service is your convenient solution</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-7.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Tyres Anywhere LTD Mobile Tyres Van"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 7,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-8.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}>`);
                  if (!__props.location) {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Fitting</h1>`);
                  } else {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)}</h1>`);
                  }
                  _push3(`<p class="sm:text-sm text-xs text-center"${_scopeId2}>Same day service for emergencies &amp; non-emergencies.</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-8.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      !__props.location ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                        key: 1,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 8,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/images/showcase/gallary/mobile-tyre-fitting-9.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w" alt="Mobile tyre puncture repair" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" class="object-cover object-center w-full h-full brightness-[0.6]"${_scopeId2}><div class="absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId2}>`);
                  if (!__props.location) {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>30-60 Minute Response</h1>`);
                  } else {
                    _push3(`<h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId2}>Mobile Tyre Repair in ${ssrInterpolate(__props.location)}</h1>`);
                  }
                  _push3(`<p class="sm:text-sm text-xs text-center"${_scopeId2}>Maximum 30-60 minute response for emergencies.</p></div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-9.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w",
                      alt: "Mobile tyre puncture repair",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      class: "object-cover object-center w-full h-full brightness-[0.6]"
                    }),
                    createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      !__props.location ? (openBlock(), createBlock("h1", {
                        key: 0,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                        key: 1,
                        class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                      }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(CarouselSlide, {
                index: 0,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-1.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-1.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-1-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-1-300.webp 300w",
                    class: "object-cover object-center w-full h-full brightness-[0.6]",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    alt: "Tyres Anywhere LTD Mobile Tyres Van"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 1,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                    class: "object-cover object-center w-full h-full brightness-[0.6]",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    alt: "Mobile Tyre Fitting"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    !__props.location ? (openBlock(), createBlock("h1", {
                      key: 0,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                      key: 1,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 2,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-3.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-3.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-3-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-3-300.webp 300w",
                    alt: "Mobile tyre puncture repair",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    class: "object-cover object-center w-full h-full brightness-[0.6]"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    !__props.location ? (openBlock(), createBlock("h1", {
                      key: 0,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                      key: 1,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 3,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-4.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-4.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-4-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-4-300.webp 300w",
                    class: "object-cover object-center w-full h-full brightness-[0.6]",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    alt: "Tyres Anywhere LTD Mobile Tyres Van"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 4,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-5.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-5.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-5-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-5-300.webp 300w",
                    class: "object-cover object-center w-full h-full brightness-[0.6]",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    alt: "Mobile Tyre Fitting"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    !__props.location ? (openBlock(), createBlock("h1", {
                      key: 0,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                      key: 1,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 5,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                    alt: "Mobile tyre puncture repair",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    class: "object-cover object-center w-full h-full brightness-[0.6]"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    !__props.location ? (openBlock(), createBlock("h1", {
                      key: 0,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                      key: 1,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 6,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-7.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-7.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-7-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-7-300.webp 300w",
                    class: "object-cover object-center w-full h-full brightness-[0.6]",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    alt: "Tyres Anywhere LTD Mobile Tyres Van"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "We Come To You!"),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Our mobile tyre fitting service is your convenient solution")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 7,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-8.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-8.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-8-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-8-300.webp 300w",
                    class: "object-cover object-center w-full h-full brightness-[0.6]",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    alt: "Mobile Tyre Fitting"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    !__props.location ? (openBlock(), createBlock("h1", {
                      key: 0,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Fitting")) : (openBlock(), createBlock("h1", {
                      key: 1,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Fitting in " + toDisplayString(__props.location), 1)),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 8,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "/assets/images/showcase/gallary/mobile-tyre-fitting-9.webp",
                    srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-9.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-9-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-9-300.webp 300w",
                    alt: "Mobile tyre puncture repair",
                    sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                    class: "object-cover object-center w-full h-full brightness-[0.6]"
                  }),
                  createVNode("div", { class: "absolute left-[15%] right-[15%] xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                    !__props.location ? (openBlock(), createBlock("h1", {
                      key: 0,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "30-60 Minute Response")) : (openBlock(), createBlock("h1", {
                      key: 1,
                      class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"
                    }, "Mobile Tyre Repair in " + toDisplayString(__props.location), 1)),
                    createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Maximum 30-60 minute response for emergencies.")
                  ])
                ]),
                _: 1
              }, 8, ["visibleSlide", "direction"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Carousel/MainCarousel.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const SearchTyre_vue_vue_type_style_index_0_scoped_8a5c86aa_lang = "";
const _sfc_main$f = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full bg-gray-200 py-2.5 px-5" }, _attrs))} data-v-8a5c86aa><p class="uppercase text-shadow 2xl:text-2xl lg:text-xl text-lg text-center font-bold" data-v-8a5c86aa>Search tyres by tyre size</p><img class="w-full" src="/assets/images/main/tyre-size-gd-trn.webp" srcset="/assets/images/main/tyre-size-gd-trn.webp 720w,
						/assets/images/main/tyre-size-gd-trn-500.webp 500w,
						/assets/images/main/tyre-size-gd-trn-300.webp 300w,
						/assets/images/main/tyre-size-gd-trn-150.webp 150w" sizes="(max-width: 576px) calc(100vw - 65px),(max-width: 768px) 500px, (max-width: 992px) 320px, (max-width: 1200px) 344px, (max-width: 1400px) 359px, 356px" alt="Tyre Size Guide" data-v-8a5c86aa><a href="https://tyresanywhere.com/search-tyres" class="flex items-center justify-center bg-wheelfit-500 w-full 2xl:h-20 lg:h-16 h-14 md:mt-auto mt-4 rounded-lg cursor-pointer" data-v-8a5c86aa><svg xmlns="http://www.w3.org/2000/svg" class="lg:w-16 w-10 lg:h-16 h-10 fill-white" viewBox="0 0 24 24" data-v-8a5c86aa><path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" data-v-8a5c86aa></path></svg></a></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SearchTyre.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const SearchTyre = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8a5c86aa"]]);
const _sfc_main$e = {
  __name: "OurServices",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-x border-b border-gray-300 pt-8 pb-16" }, _attrs))}><p class="text-center text-3xl font-montserrat font-bold mb-8">Our Emergency Services</p><div class="sm:w-full w-64 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:px-8 md:px-28 sm:px-8 px-0 xl:gap-x-4 lg:gap-x-3 gap-x-4 lg:gap-y-0 gap-y-4 items-center justify-center">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "col-span-1",
        href: "/mobile-tyre-fitting",
        title: "Mobile Tyre Fitting"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group relative w-full xl:h-60 lg:h-40 h-48 relative rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out"${_scopeId}><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/assets/images/services/mobile-tyre-fitting-emergency.webp" alt="Mobile Tyre Fitting"${_scopeId}><div class="flex items-center justify-center w-full h-full z-10 group-hover:bg-secondary-400/50 transition duration-300 ease-in-out"${_scopeId}><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase group-hover:pb-6 transition-all duration-300 ease-in-out"${_scopeId}>Mobile Tyre Fitting</h2></div></div>`);
          } else {
            return [
              createVNode("div", { class: "group relative w-full xl:h-60 lg:h-40 h-48 relative rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out" }, [
                createVNode("img", {
                  class: "absolute inset-0 w-full h-full brightness-50 object-cover",
                  src: "/assets/images/services/mobile-tyre-fitting-emergency.webp",
                  alt: "Mobile Tyre Fitting"
                }),
                createVNode("div", { class: "flex items-center justify-center w-full h-full z-10 group-hover:bg-secondary-400/50 transition duration-300 ease-in-out" }, [
                  createVNode("h2", { class: "xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase group-hover:pb-6 transition-all duration-300 ease-in-out" }, "Mobile Tyre Fitting")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: "col-span-1",
        href: "/breakdown-recovery",
        title: "Breakdown Recovery"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group relative w-full xl:h-60 lg:h-40 h-48 relative rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out"${_scopeId}><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/assets/images/services/recovery.webp" alt="Breakdown Recovery"${_scopeId}><div class="flex items-center justify-center w-full h-full z-10 group-hover:bg-secondary-400/50 transition duration-300 ease-in-out"${_scopeId}><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase group-hover:pb-6 transition-all duration-300 ease-in-out"${_scopeId}>Breakdown Recovery</h2></div></div>`);
          } else {
            return [
              createVNode("div", { class: "group relative w-full xl:h-60 lg:h-40 h-48 relative rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out" }, [
                createVNode("img", {
                  class: "absolute inset-0 w-full h-full brightness-50 object-cover",
                  src: "/assets/images/services/recovery.webp",
                  alt: "Breakdown Recovery"
                }),
                createVNode("div", { class: "flex items-center justify-center w-full h-full z-10 group-hover:bg-secondary-400/50 transition duration-300 ease-in-out" }, [
                  createVNode("h2", { class: "xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase group-hover:pb-6 transition-all duration-300 ease-in-out" }, "Breakdown Recovery")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="col-span-1"><div class="group relative w-full xl:h-60 lg:h-40 h-48 relative rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out"><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/assets/images/services/jump-start.webp" alt="Jump Starts"><div class="flex items-center justify-center w-full h-full z-10 group-hover:bg-secondary-400/50 transition duration-300 ease-in-out"><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase group-hover:pb-6 transition-all duration-300 ease-in-out">Jump Starts</h2></div></div></div><div class="col-span-1"><div class="group relative w-full xl:h-60 lg:h-40 h-48 relative rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out"><img class="absolute inset-0 w-full h-full brightness-50 object-cover" src="/assets/images/services/battery-fitting.webp" alt="Battery"><div class="flex items-center justify-center w-full h-full z-10 group-hover:bg-secondary-400/50 transition duration-300 ease-in-out"><h2 class="xl:text-lg lg:text-sm text-white text-center whitespace-nowrap font-montserrat font-bold uppercase group-hover:pb-6 transition-all duration-300 ease-in-out">Battery</h2></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/OurServices.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "OurQualities",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="md:text-3xl sm:text-2xl text-xl text-center"${_scopeId2}>Our Values</p><div class="flex md:flex-row flex-col px-12 mt-12 md:space-y-0 space-y-8"${_scopeId2}><div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center"${_scopeId2}><img src="/assets/images/main/affordable.webp" class="h-icons" width="90" height="90" alt="Affordable prices"${_scopeId2}><span class="text-lg my-2"${_scopeId2}>Affordable</span><p class="text-center text-sm"${_scopeId2}>At TyresAnywhere, our prices are reasonable for every service we offer. We provide high-quality budget, mid-range or premium tyres at a fair price.</p></div><div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center"${_scopeId2}><img src="/assets/images/main/fast.webp" class="h-icons" width="90" height="90" alt="Affordable prices"${_scopeId2}><span class="text-lg my-2"${_scopeId2}>Fast Response</span><p class="text-center text-sm"${_scopeId2}>We provide reliable mobile tyre fitting to ensure your road ready within hours or even minutes of your call.</p></div><div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center"${_scopeId2}><img src="/assets/images/main/authentic.webp" class="h-icons" width="90" height="90" alt="Affordable prices"${_scopeId2}><span class="text-lg my-2"${_scopeId2}>Authentic</span><p class="text-center text-sm"${_scopeId2}>All of our tyres &amp; products are 100% authentic, brand new and UK Standard</p></div></div><div class="mt-24"${_scopeId2}><p class="md:text-3xl sm:text-2xl text-xl text-center"${_scopeId2}>Accepted Payment Methods</p><div class="flex md:flex-row flex-col px-12 mt-12 md:space-y-0 space-y-8"${_scopeId2}><div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center"${_scopeId2}><img src="/assets/images/main/paypal.webp" class="h-icons" width="90" height="90" alt="Affordable prices"${_scopeId2}><span class="text-lg my-2"${_scopeId2}>PayPal</span><p class="text-center text-sm"${_scopeId2}>We accept PayPal payments through our online booking system.</p></div><div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center"${_scopeId2}><img src="/assets/images/main/card.webp" class="h-icons" width="90" height="90" alt="Affordable prices"${_scopeId2}><span class="text-lg my-2"${_scopeId2}>Card Payments</span><p class="text-center text-sm"${_scopeId2}>We accept any major debit/credit card through our online booking system or in-person.</p></div><div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center"${_scopeId2}><img src="/assets/images/main/cash.webp" class="h-icons" width="90" height="90" alt="Affordable prices"${_scopeId2}><span class="text-lg my-2"${_scopeId2}>Cash</span><p class="text-center text-sm"${_scopeId2}>We accept cash payments</p></div></div></div>`);
                } else {
                  return [
                    createVNode("p", { class: "md:text-3xl sm:text-2xl text-xl text-center" }, "Our Values"),
                    createVNode("div", { class: "flex md:flex-row flex-col px-12 mt-12 md:space-y-0 space-y-8" }, [
                      createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                        createVNode("img", {
                          src: "/assets/images/main/affordable.webp",
                          class: "h-icons",
                          width: "90",
                          height: "90",
                          alt: "Affordable prices"
                        }),
                        createVNode("span", { class: "text-lg my-2" }, "Affordable"),
                        createVNode("p", { class: "text-center text-sm" }, "At TyresAnywhere, our prices are reasonable for every service we offer. We provide high-quality budget, mid-range or premium tyres at a fair price.")
                      ]),
                      createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                        createVNode("img", {
                          src: "/assets/images/main/fast.webp",
                          class: "h-icons",
                          width: "90",
                          height: "90",
                          alt: "Affordable prices"
                        }),
                        createVNode("span", { class: "text-lg my-2" }, "Fast Response"),
                        createVNode("p", { class: "text-center text-sm" }, "We provide reliable mobile tyre fitting to ensure your road ready within hours or even minutes of your call.")
                      ]),
                      createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                        createVNode("img", {
                          src: "/assets/images/main/authentic.webp",
                          class: "h-icons",
                          width: "90",
                          height: "90",
                          alt: "Affordable prices"
                        }),
                        createVNode("span", { class: "text-lg my-2" }, "Authentic"),
                        createVNode("p", { class: "text-center text-sm" }, "All of our tyres & products are 100% authentic, brand new and UK Standard")
                      ])
                    ]),
                    createVNode("div", { class: "mt-24" }, [
                      createVNode("p", { class: "md:text-3xl sm:text-2xl text-xl text-center" }, "Accepted Payment Methods"),
                      createVNode("div", { class: "flex md:flex-row flex-col px-12 mt-12 md:space-y-0 space-y-8" }, [
                        createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                          createVNode("img", {
                            src: "/assets/images/main/paypal.webp",
                            class: "h-icons",
                            width: "90",
                            height: "90",
                            alt: "Affordable prices"
                          }),
                          createVNode("span", { class: "text-lg my-2" }, "PayPal"),
                          createVNode("p", { class: "text-center text-sm" }, "We accept PayPal payments through our online booking system.")
                        ]),
                        createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                          createVNode("img", {
                            src: "/assets/images/main/card.webp",
                            class: "h-icons",
                            width: "90",
                            height: "90",
                            alt: "Affordable prices"
                          }),
                          createVNode("span", { class: "text-lg my-2" }, "Card Payments"),
                          createVNode("p", { class: "text-center text-sm" }, "We accept any major debit/credit card through our online booking system or in-person.")
                        ]),
                        createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                          createVNode("img", {
                            src: "/assets/images/main/cash.webp",
                            class: "h-icons",
                            width: "90",
                            height: "90",
                            alt: "Affordable prices"
                          }),
                          createVNode("span", { class: "text-lg my-2" }, "Cash"),
                          createVNode("p", { class: "text-center text-sm" }, "We accept cash payments")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("p", { class: "md:text-3xl sm:text-2xl text-xl text-center" }, "Our Values"),
                  createVNode("div", { class: "flex md:flex-row flex-col px-12 mt-12 md:space-y-0 space-y-8" }, [
                    createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                      createVNode("img", {
                        src: "/assets/images/main/affordable.webp",
                        class: "h-icons",
                        width: "90",
                        height: "90",
                        alt: "Affordable prices"
                      }),
                      createVNode("span", { class: "text-lg my-2" }, "Affordable"),
                      createVNode("p", { class: "text-center text-sm" }, "At TyresAnywhere, our prices are reasonable for every service we offer. We provide high-quality budget, mid-range or premium tyres at a fair price.")
                    ]),
                    createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                      createVNode("img", {
                        src: "/assets/images/main/fast.webp",
                        class: "h-icons",
                        width: "90",
                        height: "90",
                        alt: "Affordable prices"
                      }),
                      createVNode("span", { class: "text-lg my-2" }, "Fast Response"),
                      createVNode("p", { class: "text-center text-sm" }, "We provide reliable mobile tyre fitting to ensure your road ready within hours or even minutes of your call.")
                    ]),
                    createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                      createVNode("img", {
                        src: "/assets/images/main/authentic.webp",
                        class: "h-icons",
                        width: "90",
                        height: "90",
                        alt: "Affordable prices"
                      }),
                      createVNode("span", { class: "text-lg my-2" }, "Authentic"),
                      createVNode("p", { class: "text-center text-sm" }, "All of our tyres & products are 100% authentic, brand new and UK Standard")
                    ])
                  ]),
                  createVNode("div", { class: "mt-24" }, [
                    createVNode("p", { class: "md:text-3xl sm:text-2xl text-xl text-center" }, "Accepted Payment Methods"),
                    createVNode("div", { class: "flex md:flex-row flex-col px-12 mt-12 md:space-y-0 space-y-8" }, [
                      createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                        createVNode("img", {
                          src: "/assets/images/main/paypal.webp",
                          class: "h-icons",
                          width: "90",
                          height: "90",
                          alt: "Affordable prices"
                        }),
                        createVNode("span", { class: "text-lg my-2" }, "PayPal"),
                        createVNode("p", { class: "text-center text-sm" }, "We accept PayPal payments through our online booking system.")
                      ]),
                      createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                        createVNode("img", {
                          src: "/assets/images/main/card.webp",
                          class: "h-icons",
                          width: "90",
                          height: "90",
                          alt: "Affordable prices"
                        }),
                        createVNode("span", { class: "text-lg my-2" }, "Card Payments"),
                        createVNode("p", { class: "text-center text-sm" }, "We accept any major debit/credit card through our online booking system or in-person.")
                      ]),
                      createVNode("div", { class: "md:w-1/3 w-full px-4 flex flex-col items-center justify-center" }, [
                        createVNode("img", {
                          src: "/assets/images/main/cash.webp",
                          class: "h-icons",
                          width: "90",
                          height: "90",
                          alt: "Affordable prices"
                        }),
                        createVNode("span", { class: "text-lg my-2" }, "Cash"),
                        createVNode("p", { class: "text-center text-sm" }, "We accept cash payments")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/OurQualities.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "BreakdownRecovery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>24Hr Breakdown Recovery &amp; Assistance | Tyres Anywhere</title><meta name="description" content="Our commercial mobile tyre fitting provides and fits high quality cheap tyres for your van, at your convenience."${_scopeId}><link rel="canonical" href=""${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "24Hr Breakdown Recovery & Assistance | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "Our commercial mobile tyre fitting provides and fits high quality cheap tyres for your van, at your convenience."
              }),
              createVNode("link", {
                rel: "canonical",
                href: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}><div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]"${_scopeId}><img src="/assets/images/showcase/breakdown-recovery.webp" srcset="/assets/images/showcase/breakdown-recovery.webp 1080w,
                                    /assets/images/showcase/breakdown-recovery-500.webp 500w,
                                    /assets/images/showcase/breakdown-recovery-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Breakdown Recovery</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies.</p></div></div></div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode("div", { class: "relative overflow-hidden md:h-full sm:h-[300px] h-[200px]" }, [
                    createVNode("img", {
                      src: "/assets/images/showcase/breakdown-recovery.webp",
                      srcset: "/assets/images/showcase/breakdown-recovery.webp 1080w,\n                                    /assets/images/showcase/breakdown-recovery-500.webp 500w,\n                                    /assets/images/showcase/breakdown-recovery-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Breakdown Recovery"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Breakdown Recovery</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>If you&#39;re broken down at the side of the road, we&#39;re here to help!</h2><div class="lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4"${_scopeId2}><div class="col-span-12"${_scopeId2}><p class="text-sm"${_scopeId2}> At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That&#39;s why we&#39;re here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you&#39;re stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h3 class="lg:text-3xl text-2xl"${_scopeId2}>Why choose Tyres Anywhere?</h3><ol class="text-sm space-y-3 mt-4"${_scopeId2}><li${_scopeId2}><b${_scopeId2}>Swift Response Time:</b> We know that time is of the essence when you&#39;re facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we&#39;re just a phone call away whenever you need us. Our rapid response time means you won&#39;t be left waiting for hours. </li><li${_scopeId2}><b${_scopeId2}>24/7 Emergency Assistance:</b> Breakdowns rarely happen at convenient times. That&#39;s why we provide 24/7 emergency assistance, 365 days a year. No matter if it&#39;s the dead of night or a public holiday, we&#39;re committed to helping you get back on the road as quickly as possible. </li><li${_scopeId2}><b${_scopeId2}>Expert Technicians:</b> Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. </li><li${_scopeId2}><b${_scopeId2}>Comprehensive Coverage:</b> We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you&#39;re driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. </li><li${_scopeId2}><b${_scopeId2}>Towing and On-Site Repairs:</b> Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it&#39;s a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. </li><li${_scopeId2}><b${_scopeId2}>Transparent Pricing:</b> We believe in transparent pricing, so you&#39;ll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we&#39;ll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. </li><li${_scopeId2}><b${_scopeId2}>Customer Satisfaction:</b> Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer&#39;s experience with TyresAnywhere is a positive one. Don&#39;t just take our word for it—check out the glowing testimonials from our satisfied clients. </li></ol></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-full" src="/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w" sizes="(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)" alt="Breakdown rescue"${_scopeId2}></div><div class="col-span-12"${_scopeId2}><p class="text-sm"${_scopeId2}> When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you&#39;ll be prepared for any unexpected breakdowns. Remember, we&#39;re just a phone call away, ready to help you get back on the road with minimal disruption. </p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Breakdown Recovery"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "If you're broken down at the side of the road, we're here to help!"),
                      createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("p", { class: "text-sm" }, " At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That's why we're here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you're stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere?"),
                          createVNode("ol", { class: "text-sm space-y-3 mt-4" }, [
                            createVNode("li", null, [
                              createVNode("b", null, "Swift Response Time:"),
                              createTextVNode(" We know that time is of the essence when you're facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we're just a phone call away whenever you need us. Our rapid response time means you won't be left waiting for hours. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "24/7 Emergency Assistance:"),
                              createTextVNode(" Breakdowns rarely happen at convenient times. That's why we provide 24/7 emergency assistance, 365 days a year. No matter if it's the dead of night or a public holiday, we're committed to helping you get back on the road as quickly as possible. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Expert Technicians:"),
                              createTextVNode(" Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Comprehensive Coverage:"),
                              createTextVNode(" We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you're driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Towing and On-Site Repairs:"),
                              createTextVNode(" Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it's a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Transparent Pricing:"),
                              createTextVNode(" We believe in transparent pricing, so you'll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we'll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("b", null, "Customer Satisfaction:"),
                              createTextVNode(" Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer's experience with TyresAnywhere is a positive one. Don't just take our word for it—check out the glowing testimonials from our satisfied clients. ")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: "/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                            srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                            sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                            alt: "Breakdown rescue"
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode("p", { class: "text-sm" }, " When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you'll be prepared for any unexpected breakdowns. Remember, we're just a phone call away, ready to help you get back on the road with minimal disruption. ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, "Breakdown Recovery"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "If you're broken down at the side of the road, we're here to help!"),
                    createVNode("div", { class: "lg:grid grid-cols-12 gap-y-12 lg:gap-x-4 lg:space-y-0 space-y-12 lg:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode("p", { class: "text-sm" }, " At TyresAnywhere, we understand that unexpected vehicle breakdowns can be stressful and inconvenient. That's why we're here to offer you reliable and efficient breakdown recovery services for your cars and vans. Whether you're stranded on the side of the road or stuck in your driveway, our team of skilled professionals is ready to come to your aid. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h3", { class: "lg:text-3xl text-2xl" }, "Why choose Tyres Anywhere?"),
                        createVNode("ol", { class: "text-sm space-y-3 mt-4" }, [
                          createVNode("li", null, [
                            createVNode("b", null, "Swift Response Time:"),
                            createTextVNode(" We know that time is of the essence when you're facing a breakdown situation. Our dedicated team operates around the clock, ensuring that we're just a phone call away whenever you need us. Our rapid response time means you won't be left waiting for hours. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "24/7 Emergency Assistance:"),
                            createTextVNode(" Breakdowns rarely happen at convenient times. That's why we provide 24/7 emergency assistance, 365 days a year. No matter if it's the dead of night or a public holiday, we're committed to helping you get back on the road as quickly as possible. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Expert Technicians:"),
                            createTextVNode(" Our skilled technicians are highly trained professionals with years of experience in the automotive industry. They possess the knowledge and expertise to diagnose and fix a wide range of breakdown issues on the spot. Rest assured, your vehicle will be in capable hands. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Comprehensive Coverage:"),
                            createTextVNode(" We offer breakdown recovery services for all types of cars and vans, regardless of make or model. Whether you're driving a compact car, a luxury SUV, or a commercial van, we have the equipment and expertise to assist you. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Towing and On-Site Repairs:"),
                            createTextVNode(" Depending on the severity of the breakdown, we provide both towing services and on-site repairs. Our fleet of specialized vehicles can safely transport your vehicle to a repair shop if necessary. Alternatively, if it's a minor issue that can be resolved on-site, our technicians will work diligently to get you back on the road swiftly. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Transparent Pricing:"),
                            createTextVNode(" We believe in transparent pricing, so you'll never have to worry about hidden costs or surprises. Our breakdown recovery services are competitively priced, and we'll provide you with a clear breakdown of the charges before any work is carried out. Your satisfaction is our priority. ")
                          ]),
                          createVNode("li", null, [
                            createVNode("b", null, "Customer Satisfaction:"),
                            createTextVNode(" Customer satisfaction is at the core of our business. We strive to provide exceptional service, ensuring that each customer's experience with TyresAnywhere is a positive one. Don't just take our word for it—check out the glowing testimonials from our satisfied clients. ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: "/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp",
                          srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-6.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-6-300.webp 300w",
                          sizes: "(min-width: 1536px) 354px, (min-width: 1280px) 311px, (min-width: 1024px) 304px, (min-width: 768px) 686px, (min-width: 640px) 494px, (min-width: 576px) 526px, calc(100vw - 50px)",
                          alt: "Breakdown rescue"
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode("p", { class: "text-sm" }, " When it comes to breakdown recovery, you need a service you can trust. TyresAnywhere is your go-to partner for fast, reliable, and professional assistance. Save our number in your contacts or bookmark our website, so you'll be prepared for any unexpected breakdowns. Remember, we're just a phone call away, ready to help you get back on the road with minimal disruption. ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/BreakdownRecovery.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "CommercialTyres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Commercial Mobile Tyre Fitting | Van Mobile Tyre Fitting | Tyres Anywhere</title><meta name="description" content="Yes, we also do commercial &amp; van tyres alongside normal passenger tyres, fitted at your desired location on the same day of your call"${_scopeId}><meta name="keywords" content="mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"${_scopeId}><link rel="canonical" href=""${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Commercial Mobile Tyre Fitting | Van Mobile Tyre Fitting | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "Yes, we also do commercial & van tyres alongside normal passenger tyres, fitted at your desired location on the same day of your call"
              }),
              createVNode("meta", {
                name: "keywords",
                content: "mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"
              }),
              createVNode("link", {
                rel: "canonical",
                href: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}><div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]"${_scopeId}><img src="/assets/images/showcase/commercial-tyres.webp" srcset="/assets/images/showcase/commercial-tyres.webp 1920w,
                                    /assets/images/showcase/commercial-tyres-500.webp 500w,
                                    /assets/images/showcase/commercial-tyres-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Van Commercial Tyres</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies.</p></div></div></div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode("div", { class: "relative overflow-hidden md:h-full sm:h-[300px] h-[200px]" }, [
                    createVNode("img", {
                      src: "/assets/images/showcase/commercial-tyres.webp",
                      srcset: "/assets/images/showcase/commercial-tyres.webp 1920w,\n                                    /assets/images/showcase/commercial-tyres-500.webp 500w,\n                                    /assets/images/showcase/commercial-tyres-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Van Commercial Tyres"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Commercial Mobile Tyre Fitting</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>Yes, we also fit commercial tyres alongside normal passenger tyres.</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-12 lg:p-4"${_scopeId2}><p class="text-sm"${_scopeId2}> Why not take advantage of our convenient commercial mobile tyre fitting service? </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our services comes to your desired fitting location to fit your new commercial tyre so you don&#39;t have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Commercial Mobile Tyre Fitting"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Yes, we also fit commercial tyres alongside normal passenger tyres."),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("p", { class: "text-sm" }, " Why not take advantage of our convenient commercial mobile tyre fitting service? "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our services comes to your desired fitting location to fit your new commercial tyre so you don't have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Commercial Mobile Tyre Fitting"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Yes, we also fit commercial tyres alongside normal passenger tyres."),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("p", { class: "text-sm" }, " Why not take advantage of our convenient commercial mobile tyre fitting service? "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our services comes to your desired fitting location to fit your new commercial tyre so you don't have to waste your time to get your tyres fitted at a garage, and best of all, we operate every day of the week and can fit your tyre on the same day of your call so you and your commercial vehicle are safe on the road. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/CommercialTyres.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  props: {
    errors: Object
  },
  setup(__props) {
    const form = useForm({
      name: null,
      phone: null,
      email: null,
      postcode: null,
      subject: null,
      body: null
    });
    function submit() {
      form.post("/contact-us", {
        preserveScroll: (page) => Object.keys(page.props.errors).length
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Contact Us | Tyres Anywhere</title><meta name="description" content="Need to contact the team? We&#39;re always available! Fill out the short form on this page or call us at 07442 980101"${_scopeId}><link rel="canonical" href=""${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Contact Us | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "Need to contact the team? We're always available! Fill out the short form on this page or call us at 07442 980101"
              }),
              createVNode("link", {
                rel: "canonical",
                href: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}><div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]"${_scopeId}><img src="/assets/images/showcase/contact.webp" srcset="/assets/images/showcase/contact.webp 1920w,
                                    /assets/images/showcase/contact-500.webp 500w,
                                    /assets/images/showcase/contact-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Contact us</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Fill in the short form below, or call us</p></div></div></div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode("div", { class: "relative overflow-hidden md:h-full sm:h-[300px] h-[200px]" }, [
                    createVNode("img", {
                      src: "/assets/images/showcase/contact.webp",
                      srcset: "/assets/images/showcase/contact.webp 1920w,\n                                    /assets/images/showcase/contact-500.webp 500w,\n                                    /assets/images/showcase/contact-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Contact us"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Fill in the short form below, or call us")
                    ])
                  ])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, { class: "py-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-3"${_scopeId}>`);
            if (_ctx.$page.props.success) {
              _push2(`<div${_scopeId}></div>`);
            } else {
              _push2(`<div${_scopeId}></div>`);
            }
            if (!_ctx.$page.props.success) {
              _push2(`<div class="mb-6"${_scopeId}><p class="text-4xl font-light mb-2"${_scopeId}>Contact Us</p><p class="text-sm"${_scopeId}>Contact us by giving us a call on <a class="underline font-semibold" href="tel:07442980101"${_scopeId}>07442 980101</a>, or by filling out the form below.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-full md:grid md:grid-cols-12 flex flex-col-reverse"${_scopeId}><div class="lg:col-span-6 md:col-span-7 md:mt-0 mt-8"${_scopeId}>`);
            if (_ctx.$page.props.success) {
              _push2(`<div${_scopeId}><p class="font-montserrat uppercase tracking-wide font-semibold"${_scopeId}>Message sent successfully</p><span class="text-sm"${_scopeId}>We&#39;ve received your message! Hold tight for our reply soon.</span>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/",
                class: "block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Back to home `);
                  } else {
                    return [
                      createTextVNode(" Back to home ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<form class="w-full space-y-4"${_scopeId}><div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full"${_scopeId}><div class="sm:w-1/2 w-full"${_scopeId}><label for="name" class="text-sm"${_scopeId}>Name <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" id="name" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.name) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="sm:w-1/2 w-full"${_scopeId}><label for="phone" class="text-sm"${_scopeId}>Phone Number <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).phone)} type="text" id="phone" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.phone) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.phone)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full"${_scopeId}><div class="sm:w-1/2 w-full"${_scopeId}><label for="email" class="text-sm"${_scopeId}>E-mail <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).email)} type="text" id="email" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.email) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.email)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="sm:w-1/2 w-full"${_scopeId}><label for="postcode" class="text-sm"${_scopeId}><span${_scopeId}>Postcode</span><span class="text-gray-400 text-xs ml-2"${_scopeId}>Optional</span></label><input${ssrRenderAttr("value", unref(form).postcode)} type="text" id="postcode" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.postcode) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.postcode)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div${_scopeId}><label for="subject" class="text-sm"${_scopeId}>What are you looking for? <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).subject)} type="text" id="subject" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>`);
              if (__props.errors.subject) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.subject)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}><label for="body" class="text-sm"${_scopeId}>Details <span class="text-red-500"${_scopeId}>*</span></label><textarea type="text" id="body" class="text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"${_scopeId}>${ssrInterpolate(unref(form).body)}</textarea>`);
              if (__props.errors.body) {
                _push2(`<span class="text-xs text-red-500"${_scopeId}>${ssrInterpolate(__props.errors.body)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center justify-end"${_scopeId}><button type="submit" class="bg-blue-500 py-1.5 px-4 font-semibold text-white rounded uppercase hover:bg-blue-600 active:ring-2 transition duration-150 ease-in-out"${_scopeId}> Send message </button></div></form>`);
            }
            _push2(`</div><div class="lg:col-span-6 md:col-span-5 xl:pl-24 lg:pl-16 md:pl-4"${_scopeId}><p class="xl:text-3xl lg:text-2xl text-xl text-gray-600 md:mb-6 mb-2"${_scopeId}>Tel: <a class="text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out" href="tel:07442980101"${_scopeId}>07442 980101</a></p><p class="xl:text-3xl lg:text-2xl text-xl text-gray-600"${_scopeId}>Email: <a class="text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out" href="mailto:info@tyres-anywhere.co.uk"${_scopeId}>info@tyres-anywhere.co.uk</a></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "px-3" }, [
                _ctx.$page.props.success ? (openBlock(), createBlock("div", { key: 0 })) : (openBlock(), createBlock("div", { key: 1 })),
                !_ctx.$page.props.success ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mb-6"
                }, [
                  createVNode("p", { class: "text-4xl font-light mb-2" }, "Contact Us"),
                  createVNode("p", { class: "text-sm" }, [
                    createTextVNode("Contact us by giving us a call on "),
                    createVNode("a", {
                      class: "underline font-semibold",
                      href: "tel:07442980101"
                    }, "07442 980101"),
                    createTextVNode(", or by filling out the form below.")
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "w-full md:grid md:grid-cols-12 flex flex-col-reverse" }, [
                  createVNode("div", { class: "lg:col-span-6 md:col-span-7 md:mt-0 mt-8" }, [
                    _ctx.$page.props.success ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("p", { class: "font-montserrat uppercase tracking-wide font-semibold" }, "Message sent successfully"),
                      createVNode("span", { class: "text-sm" }, "We've received your message! Hold tight for our reply soon."),
                      createVNode(unref(Link), {
                        href: "/",
                        class: "block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back to home ")
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("form", {
                      key: 1,
                      class: "w-full space-y-4",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", { class: "flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full" }, [
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "name",
                            class: "text-sm"
                          }, [
                            createTextVNode("Name "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            type: "text",
                            id: "name",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).name]
                          ]),
                          __props.errors.name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "phone",
                            class: "text-sm"
                          }, [
                            createTextVNode("Phone Number "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                            type: "text",
                            id: "phone",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).phone]
                          ]),
                          __props.errors.phone ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.phone), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 items-start w-full" }, [
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "email",
                            class: "text-sm"
                          }, [
                            createTextVNode("E-mail "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            type: "text",
                            id: "email",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).email]
                          ]),
                          __props.errors.email ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "sm:w-1/2 w-full" }, [
                          createVNode("label", {
                            for: "postcode",
                            class: "text-sm"
                          }, [
                            createVNode("span", null, "Postcode"),
                            createVNode("span", { class: "text-gray-400 text-xs ml-2" }, "Optional")
                          ]),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).postcode = $event,
                            type: "text",
                            id: "postcode",
                            class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).postcode]
                          ]),
                          __props.errors.postcode ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-red-500"
                          }, toDisplayString(__props.errors.postcode), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "subject",
                          class: "text-sm"
                        }, [
                          createTextVNode("What are you looking for? "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).subject = $event,
                          type: "text",
                          id: "subject",
                          class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).subject]
                        ]),
                        __props.errors.subject ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.subject), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "body",
                          class: "text-sm"
                        }, [
                          createTextVNode("Details "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => unref(form).body = $event,
                          type: "text",
                          id: "body",
                          class: "text-sm py-1.5 px-3 w-full bg-white border border-gray-300 shadow-sm appearance-none rounded outline-0 focus:ring-2 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).body]
                        ]),
                        __props.errors.body ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-red-500"
                        }, toDisplayString(__props.errors.body), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "bg-blue-500 py-1.5 px-4 font-semibold text-white rounded uppercase hover:bg-blue-600 active:ring-2 transition duration-150 ease-in-out"
                        }, " Send message ")
                      ])
                    ], 40, ["onSubmit"]))
                  ]),
                  createVNode("div", { class: "lg:col-span-6 md:col-span-5 xl:pl-24 lg:pl-16 md:pl-4" }, [
                    createVNode("p", { class: "xl:text-3xl lg:text-2xl text-xl text-gray-600 md:mb-6 mb-2" }, [
                      createTextVNode("Tel: "),
                      createVNode("a", {
                        class: "text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out",
                        href: "tel:07442980101"
                      }, "07442 980101")
                    ]),
                    createVNode("p", { class: "xl:text-3xl lg:text-2xl text-xl text-gray-600" }, [
                      createTextVNode("Email: "),
                      createVNode("a", {
                        class: "text-blue-700 hover:text-cyan-500 transition duration-300 ease-in-out",
                        href: "mailto:info@tyres-anywhere.co.uk"
                      }, "info@tyres-anywhere.co.uk")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ContactUs.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>24hr Same Day Mobile Tyre Fitting &amp; Services | Car &amp; Van Tyres Fitted at Home, Work or Roadside | Tyres Anywhere</title><meta name="description" content="We provide 24/7 Mobile Tyre Fitting &amp; Services and fit your tyre on the same day of your call."${_scopeId}><meta name="keywords" content="mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "24hr Same Day Mobile Tyre Fitting & Services | Car & Van Tyres Fitted at Home, Work or Roadside | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "We provide 24/7 Mobile Tyre Fitting & Services and fit your tyre on the same day of your call."
              }),
              createVNode("meta", {
                name: "keywords",
                content: "mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$g, null, null, _parent2, _scopeId));
            _push2(`</div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode(_sfc_main$g)
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Welcome to <span class="text-wheelfit-300"${_scopeId2}>Tyres Anywhere</span></h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We bring our mobile services right to your location.</h2><p class="text-sm"${_scopeId2}><b${_scopeId2}>Tyres Anywhere</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder. </p><br${_scopeId2}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Same day mobile tyre service</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our same day mobile tyre service will ensure your new tyre is fitted or repaired within hours of your call. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> To order a same day service, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Information you may be asked for:</p><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Your tyre size</li><li${_scopeId2}>Your name</li><li${_scopeId2}>Full address of fitting location</li><li${_scopeId2}>Vehicle registration/color</li></ul></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Stuck on a roadside or motorway</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you are stuck on motorway and need an emergency tyre replacement, look no further. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> We will come out to you as soon as possible so you can be back to your own business quicker. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> To call us out, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Information you may be asked for:</p><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Your tyre size</li><li${_scopeId2}>Your name</li><li${_scopeId2}>Live location through WhatsApp/Waze/Google Maps.</li><li${_scopeId2}>Vehicle registration/color</li></ul></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold mb-2"${_scopeId2}>What do we do?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Having a punctured tyre can give you a bad headache, especially on the motorway. It prevents you from many daily activities such as going to work and may lead to you having to wait hours and hours for breakdown service. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> That&#39;s why at <b${_scopeId2}>Tyres Anywhere</b> we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> If a new tyre isn&#39;t what you&#39;re looking for, we can also repair punctured tyres at a cheaper price. Read more at our `);
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/puncture-repair"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`puncture repair`);
                      } else {
                        return [
                          createTextVNode("puncture repair")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` page. </p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Tyre brands we supply</h2><br${_scopeId2}><b class="text-sm"${_scopeId2}>Budget/Mid-range Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Farroad</li><li${_scopeId2}>Hifly</li><li${_scopeId2}>Churchill</li><li${_scopeId2}>RoadX</li><li${_scopeId2}>Infinity</li></ul><p class="text-sm"${_scopeId2}>&amp; Many more...</p><br${_scopeId2}><b class="text-sm"${_scopeId2}>Premium Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Michelin</li><li${_scopeId2}>Pirelli</li><li${_scopeId2}>Bridgestone</li><li${_scopeId2}>Goodyear</li><li${_scopeId2}>Continental</li></ul><p class="text-sm"${_scopeId2}>&amp; Many more...</p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, [
                        createTextVNode("Welcome to "),
                        createVNode("span", { class: "text-wheelfit-300" }, "Tyres Anywhere")
                      ]),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile services right to your location."),
                      createVNode("p", { class: "text-sm" }, [
                        createVNode("b", null, "Tyres Anywhere"),
                        createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder. ")
                      ]),
                      createVNode("br"),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Same day mobile tyre service"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our same day mobile tyre service will ensure your new tyre is fitted or repaired within hours of your call. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" To order a same day service, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Information you may be asked for:"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Your tyre size"),
                            createVNode("li", null, "Your name"),
                            createVNode("li", null, "Full address of fitting location"),
                            createVNode("li", null, "Vehicle registration/color")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Stuck on a roadside or motorway"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If you are stuck on motorway and need an emergency tyre replacement, look no further. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We will come out to you as soon as possible so you can be back to your own business quicker. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" To call us out, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Information you may be asked for:"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Your tyre size"),
                            createVNode("li", null, "Your name"),
                            createVNode("li", null, "Live location through WhatsApp/Waze/Google Maps."),
                            createVNode("li", null, "Vehicle registration/color")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "What do we do?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Having a punctured tyre can give you a bad headache, especially on the motorway. It prevents you from many daily activities such as going to work and may lead to you having to wait hours and hours for breakdown service. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" That's why at "),
                            createVNode("b", null, "Tyres Anywhere"),
                            createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" If a new tyre isn't what you're looking for, we can also repair punctured tyres at a cheaper price. Read more at our "),
                            createVNode(unref(Link), {
                              class: "text-blue-600 underline",
                              href: "/puncture-repair"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("puncture repair")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" page. ")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Tyre brands we supply"),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Farroad"),
                            createVNode("li", null, "Hifly"),
                            createVNode("li", null, "Churchill"),
                            createVNode("li", null, "RoadX"),
                            createVNode("li", null, "Infinity")
                          ]),
                          createVNode("p", { class: "text-sm" }, "& Many more..."),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Premium Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Michelin"),
                            createVNode("li", null, "Pirelli"),
                            createVNode("li", null, "Bridgestone"),
                            createVNode("li", null, "Goodyear"),
                            createVNode("li", null, "Continental")
                          ]),
                          createVNode("p", { class: "text-sm" }, "& Many more...")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, [
                      createTextVNode("Welcome to "),
                      createVNode("span", { class: "text-wheelfit-300" }, "Tyres Anywhere")
                    ]),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile services right to your location."),
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Tyres Anywhere"),
                      createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder. ")
                    ]),
                    createVNode("br"),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Same day mobile tyre service"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our same day mobile tyre service will ensure your new tyre is fitted or repaired within hours of your call. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" To order a same day service, please call us on "),
                          createVNode("a", {
                            class: "text-blue-600 underline",
                            href: "tel:07442980101"
                          }, "07442 980101")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Information you may be asked for:"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Your tyre size"),
                          createVNode("li", null, "Your name"),
                          createVNode("li", null, "Full address of fitting location"),
                          createVNode("li", null, "Vehicle registration/color")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Stuck on a roadside or motorway"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If you are stuck on motorway and need an emergency tyre replacement, look no further. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We will come out to you as soon as possible so you can be back to your own business quicker. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" To call us out, please call us on "),
                          createVNode("a", {
                            class: "text-blue-600 underline",
                            href: "tel:07442980101"
                          }, "07442 980101")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Information you may be asked for:"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Your tyre size"),
                          createVNode("li", null, "Your name"),
                          createVNode("li", null, "Live location through WhatsApp/Waze/Google Maps."),
                          createVNode("li", null, "Vehicle registration/color")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "What do we do?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Having a punctured tyre can give you a bad headache, especially on the motorway. It prevents you from many daily activities such as going to work and may lead to you having to wait hours and hours for breakdown service. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" That's why at "),
                          createVNode("b", null, "Tyres Anywhere"),
                          createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" If a new tyre isn't what you're looking for, we can also repair punctured tyres at a cheaper price. Read more at our "),
                          createVNode(unref(Link), {
                            class: "text-blue-600 underline",
                            href: "/puncture-repair"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("puncture repair")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" page. ")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Tyre brands we supply"),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Farroad"),
                          createVNode("li", null, "Hifly"),
                          createVNode("li", null, "Churchill"),
                          createVNode("li", null, "RoadX"),
                          createVNode("li", null, "Infinity")
                        ]),
                        createVNode("p", { class: "text-sm" }, "& Many more..."),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Premium Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Michelin"),
                          createVNode("li", null, "Pirelli"),
                          createVNode("li", null, "Bridgestone"),
                          createVNode("li", null, "Goodyear"),
                          createVNode("li", null, "Continental")
                        ]),
                        createVNode("p", { class: "text-sm" }, "& Many more...")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "Location",
  __ssrInlineRender: true,
  props: {
    location: String,
    slug: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting in ${ssrInterpolate(__props.location)} | Tyres Anywhere</title><meta name="description"${ssrRenderAttr("content", `Mobile Tyre Fitting & Service in ${__props.location}. We fit your tyres at your desired fitting location on the same day of your call! Call us at 07442 980101`)}${_scopeId}><meta name="keywords" content="mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"${_scopeId}><link rel="canonical"${ssrRenderAttr("href", "https://tyres-anywhere.co.uk/locations/" + __props.slug)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting in " + toDisplayString(__props.location) + " | Tyres Anywhere", 1),
              createVNode("meta", {
                name: "description",
                content: `Mobile Tyre Fitting & Service in ${__props.location}. We fit your tyres at your desired fitting location on the same day of your call! Call us at 07442 980101`
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: "mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/locations/" + __props.slug
              }, null, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$g, { location: __props.location }, null, _parent2, _scopeId));
            _push2(`</div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode(_sfc_main$g, { location: __props.location }, null, 8, ["location"])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Fitting &amp; Services in ${ssrInterpolate(__props.location)}</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We bring our mobile services right to your location.</h2><p class="text-sm"${_scopeId2}><b${_scopeId2}>Tyres Anywhere</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder. </p><br${_scopeId2}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Same day mobile tyre service</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our same day mobile tyre service will ensure your new tyre is fitted or repaired within hours of your call. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> To order a same day service, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Information you may be asked for:</p><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Your tyre size</li><li${_scopeId2}>Your name</li><li${_scopeId2}>Full address of fitting location</li><li${_scopeId2}>Vehicle registration/color</li></ul></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Stuck on a roadside or motorway</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you are stuck on motorway and need an emergency tyre replacement, look no further. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> We will come out to you as soon as possible so you can be back to your own business quicker. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> To call us out, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Information you may be asked for:</p><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Your tyre size</li><li${_scopeId2}>Your name</li><li${_scopeId2}>Live location through WhatsApp/Waze/Google Maps.</li><li${_scopeId2}>Vehicle registration/color</li></ul></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold mb-2"${_scopeId2}>What do we do?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Having a punctured tyre can give you a bad headache, especially on the motorway. It prevents you from many daily activities such as going to work and may lead to you having to wait hours and hours for breakdown service. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> That&#39;s why at <b${_scopeId2}>Tyres Anywhere</b> we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> If a new tyre isn&#39;t what you&#39;re looking for, we can also repair punctured tyres at a cheaper price. Read more at our `);
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/puncture-repair"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`puncture repair`);
                      } else {
                        return [
                          createTextVNode("puncture repair")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` page. </p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Tyre brands we supply</h2><br${_scopeId2}><b class="text-sm"${_scopeId2}>Budget/Mid-range Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Farroad</li><li${_scopeId2}>Hifly</li><li${_scopeId2}>Churchill</li><li${_scopeId2}>RoadX</li><li${_scopeId2}>Infinity</li></ul><p class="text-sm"${_scopeId2}>&amp; Many more...</p><br${_scopeId2}><b class="text-sm"${_scopeId2}>Premium Brands</b><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Michelin</li><li${_scopeId2}>Pirelli</li><li${_scopeId2}>Bridgestone</li><li${_scopeId2}>Goodyear</li><li${_scopeId2}>Continental</li></ul><p class="text-sm"${_scopeId2}>&amp; Many more...</p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting & Services in " + toDisplayString(__props.location), 1),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile services right to your location."),
                      createVNode("p", { class: "text-sm" }, [
                        createVNode("b", null, "Tyres Anywhere"),
                        createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder. ")
                      ]),
                      createVNode("br"),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Same day mobile tyre service"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our same day mobile tyre service will ensure your new tyre is fitted or repaired within hours of your call. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" To order a same day service, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Information you may be asked for:"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Your tyre size"),
                            createVNode("li", null, "Your name"),
                            createVNode("li", null, "Full address of fitting location"),
                            createVNode("li", null, "Vehicle registration/color")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Stuck on a roadside or motorway"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If you are stuck on motorway and need an emergency tyre replacement, look no further. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We will come out to you as soon as possible so you can be back to your own business quicker. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" To call us out, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Information you may be asked for:"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Your tyre size"),
                            createVNode("li", null, "Your name"),
                            createVNode("li", null, "Live location through WhatsApp/Waze/Google Maps."),
                            createVNode("li", null, "Vehicle registration/color")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "What do we do?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Having a punctured tyre can give you a bad headache, especially on the motorway. It prevents you from many daily activities such as going to work and may lead to you having to wait hours and hours for breakdown service. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" That's why at "),
                            createVNode("b", null, "Tyres Anywhere"),
                            createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" If a new tyre isn't what you're looking for, we can also repair punctured tyres at a cheaper price. Read more at our "),
                            createVNode(unref(Link), {
                              class: "text-blue-600 underline",
                              href: "/puncture-repair"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("puncture repair")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" page. ")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Tyre brands we supply"),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Farroad"),
                            createVNode("li", null, "Hifly"),
                            createVNode("li", null, "Churchill"),
                            createVNode("li", null, "RoadX"),
                            createVNode("li", null, "Infinity")
                          ]),
                          createVNode("p", { class: "text-sm" }, "& Many more..."),
                          createVNode("br"),
                          createVNode("b", { class: "text-sm" }, "Premium Brands"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Michelin"),
                            createVNode("li", null, "Pirelli"),
                            createVNode("li", null, "Bridgestone"),
                            createVNode("li", null, "Goodyear"),
                            createVNode("li", null, "Continental")
                          ]),
                          createVNode("p", { class: "text-sm" }, "& Many more...")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting & Services in " + toDisplayString(__props.location), 1),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring our mobile services right to your location."),
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Tyres Anywhere"),
                      createTextVNode(" is a well-rounded and a prominent mobile tyre services business in United Kingdom. Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section, and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location, whether your at home, work, roadside or on the hard-shoulder. ")
                    ]),
                    createVNode("br"),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Same day mobile tyre service"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our same day mobile tyre service will ensure your new tyre is fitted or repaired within hours of your call. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" To order a same day service, please call us on "),
                          createVNode("a", {
                            class: "text-blue-600 underline",
                            href: "tel:07442980101"
                          }, "07442 980101")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Information you may be asked for:"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Your tyre size"),
                          createVNode("li", null, "Your name"),
                          createVNode("li", null, "Full address of fitting location"),
                          createVNode("li", null, "Vehicle registration/color")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Stuck on a roadside or motorway"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If you are stuck on motorway and need an emergency tyre replacement, look no further. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We will come out to you as soon as possible so you can be back to your own business quicker. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" To call us out, please call us on "),
                          createVNode("a", {
                            class: "text-blue-600 underline",
                            href: "tel:07442980101"
                          }, "07442 980101")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Information you may be asked for:"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Your tyre size"),
                          createVNode("li", null, "Your name"),
                          createVNode("li", null, "Live location through WhatsApp/Waze/Google Maps."),
                          createVNode("li", null, "Vehicle registration/color")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "What do we do?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Having a punctured tyre can give you a bad headache, especially on the motorway. It prevents you from many daily activities such as going to work and may lead to you having to wait hours and hours for breakdown service. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" That's why at "),
                          createVNode("b", null, "Tyres Anywhere"),
                          createTextVNode(" we bring the expertise of a garage right to your chosen location. We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely. We fit budget, mid-range or premium tyres of all major brands and sizes. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" If a new tyre isn't what you're looking for, we can also repair punctured tyres at a cheaper price. Read more at our "),
                          createVNode(unref(Link), {
                            class: "text-blue-600 underline",
                            href: "/puncture-repair"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("puncture repair")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" page. ")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Tyre brands we supply"),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Budget/Mid-range Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Farroad"),
                          createVNode("li", null, "Hifly"),
                          createVNode("li", null, "Churchill"),
                          createVNode("li", null, "RoadX"),
                          createVNode("li", null, "Infinity")
                        ]),
                        createVNode("p", { class: "text-sm" }, "& Many more..."),
                        createVNode("br"),
                        createVNode("b", { class: "text-sm" }, "Premium Brands"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Michelin"),
                          createVNode("li", null, "Pirelli"),
                          createVNode("li", null, "Bridgestone"),
                          createVNode("li", null, "Goodyear"),
                          createVNode("li", null, "Continental")
                        ]),
                        createVNode("p", { class: "text-sm" }, "& Many more...")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Location.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "MobileTyreFitting",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting | Van &amp; Car Mobile Tyres | Tyres Anywhere</title><meta name="description" content="TyresAnywhere provides convenient mobile tyre fitting and will fit your tyres at home, work, roadside or even motorways!"${_scopeId}><meta name="keywords" content="mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/mobile-tyre-fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting | Van & Car Mobile Tyres | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "TyresAnywhere provides convenient mobile tyre fitting and will fit your tyres at home, work, roadside or even motorways!"
              }),
              createVNode("meta", {
                name: "keywords",
                content: "mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/mobile-tyre-fitting"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}><div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]"${_scopeId}><img src="/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Mobile Tyre Fitting</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies.</p></div></div></div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode("div", { class: "relative overflow-hidden md:h-full sm:h-[300px] h-[200px]" }, [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Mobile Tyre Fitting"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Fitting Service</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>Your brand new tyre fitted safely at your desired location.</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Do you have a damaged tyre?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a replacement tyre. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> This is because the internal structure of the tyre will most likely become damaged due to the damage or puncture that is on the sidewall. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a> for a prompt service</span></p><br${_scopeId2}><p class="text-sm"${_scopeId2}>For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.</p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>How to use our service</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether your parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your desired location </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></span></p><br${_scopeId2}><p class="text-sm"${_scopeId2}>For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.</p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold mb-2"${_scopeId2}>Emergency Mobile Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you need a new tyre within minutes, look no further </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></span></p><br${_scopeId2}><p class="text-sm"${_scopeId2}>Before you call, have ready your:</p><ul class="text-sm list-disc pl-5 mt-2"${_scopeId2}><li${_scopeId2}>Tyre size</li><li${_scopeId2}>Exact location, or send us your live location via WhatsApp / Waze / Google Maps.</li></ul></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Non-emergency Mobile Tyre Fitting</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}>You and your vehicle&#39;s safety is our top priority at <b${_scopeId2}>Tyres Anywhere</b>.</p><br${_scopeId2}><p class="text-sm"${_scopeId2}> If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it&#39;s illegal. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></span></p></div><div class="col-span-6 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>When should I get a new tyre?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}>You should get your tyres changed if you experience any of the following signs of damage:</p><ul class="text-sm list-disc pl-5 mt-2 space-y-1"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>If you hear a squeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting Service"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Your brand new tyre fitted safely at your desired location."),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Do you have a damaged tyre?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a replacement tyre. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " This is because the internal structure of the tyre will most likely become damaged due to the damage or puncture that is on the sidewall. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101"),
                              createTextVNode(" for a prompt service")
                            ])
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.")
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "How to use our service"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether your parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your desired location "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101")
                            ])
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.")
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "Emergency Mobile Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If you need a new tyre within minutes, look no further "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101")
                            ])
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "Before you call, have ready your:"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                            createVNode("li", null, "Tyre size"),
                            createVNode("li", null, "Exact location, or send us your live location via WhatsApp / Waze / Google Maps.")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Non-emergency Mobile Tyre Fitting"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode("You and your vehicle's safety is our top priority at "),
                            createVNode("b", null, "Tyres Anywhere"),
                            createTextVNode(".")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it's illegal. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-6 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "When should I get a new tyre?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "You should get your tyres changed if you experience any of the following signs of damage:"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2 space-y-1" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Fitting Service"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Your brand new tyre fitted safely at your desired location."),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Do you have a damaged tyre?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Damages or punctures on the sidewall of your tyre cannot be repaired - you will have to get a replacement tyre. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " This is because the internal structure of the tyre will most likely become damaged due to the damage or puncture that is on the sidewall. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101"),
                            createTextVNode(" for a prompt service")
                          ])
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.")
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "How to use our service"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Our mobile tyre fitting service operates 24/7 and we bring our service to you, whether your parked in your driveway, at work or stuck on the roadside. Our experienced tyre fitters are one fingertip away from heading to your desired location "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ])
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.")
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold mb-2" }, "Emergency Mobile Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If you need a new tyre within minutes, look no further "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " A punctured tyre on the middle of a motorway or road can leave you with a massive headache and waste a large portion of your day, preventing you from getting to where you need to be. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We aim to fit you a new tyre as soon as possible so you can be back on the road quicker and safer. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ])
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "Before you call, have ready your:"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2" }, [
                          createVNode("li", null, "Tyre size"),
                          createVNode("li", null, "Exact location, or send us your live location via WhatsApp / Waze / Google Maps.")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Non-emergency Mobile Tyre Fitting"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode("You and your vehicle's safety is our top priority at "),
                          createVNode("b", null, "Tyres Anywhere"),
                          createTextVNode(".")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If your vehicle is sitting on your driveway with worn or damaged tyres, it is incredibly dangerous to drive as it increases a risk of an accident to occur, not even mentioning that it's illegal. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " We provide our mobile tyre fitting service so you can have new tyres of your choice safely fitted on the same day of your call. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-6 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "When should I get a new tyre?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "You should get your tyres changed if you experience any of the following signs of damage:"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2 space-y-1" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MobileTyreFitting.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "MobileTyreRepair",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Same Day Mobile Tyre Repair | Tyres Anywhere</title><meta name="description" content="Our mobile tyre repair service ensures your punctured tyre is taken care of by our professional tyre fitters at the location of your choice, AND on the same day!"${_scopeId}><meta name="keywords" content="mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/mobile-tyre-repair"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Same Day Mobile Tyre Repair | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "Our mobile tyre repair service ensures your punctured tyre is taken care of by our professional tyre fitters at the location of your choice, AND on the same day!"
              }),
              createVNode("meta", {
                name: "keywords",
                content: "mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/mobile-tyre-repair"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}><div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]"${_scopeId}><img src="/assets/images/showcase/mobile-puncture-repair.webp" srcset="/assets/images/showcase/mobile-puncture-repair.webp 2000w,
                                    /assets/images/showcase/mobile-puncture-repair-500.webp 500w,
                                    /assets/images/showcase/mobile-puncture-repair-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Mobile Puncture Repair</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies.</p></div></div></div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode("div", { class: "relative overflow-hidden md:h-full sm:h-[300px] h-[200px]" }, [
                    createVNode("img", {
                      src: "/assets/images/showcase/mobile-puncture-repair.webp",
                      srcset: "/assets/images/showcase/mobile-puncture-repair.webp 2000w,\n                                    /assets/images/showcase/mobile-puncture-repair-500.webp 500w,\n                                    /assets/images/showcase/mobile-puncture-repair-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Mobile Puncture Repair"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Repair Service</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We seal your punctured tyre securely at your desired location.</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Is my puncture repairable?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> It&#39;s quite complicated actually. Whether the tyre is repairable or not depends on many factors, such as: The location of the puncture, size of the puncture, the condition &amp; age of the tyre or whether or not the tyre is a runflat tyre. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Read more at our `);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: "/puncture-repair",
                    class: "text-blue-600 underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`puncture repair`);
                      } else {
                        return [
                          createTextVNode("puncture repair")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` page. </p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>Sometimes it&#39;s better to go for a new tyre</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you&#39;ve repaired the same tyre once before. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> It can be more cost-effective to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}>For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.</p></div><div class="col-span-12 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId2}>When should I get a new tyre?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}>You should get your tyres changed if you experience any of the following signs of damage:</p><ul class="text-sm list-disc pl-5 mt-3 space-y-1"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>Runflat tyres cannot be repaired.</li><li${_scopeId2}>If the diameter of the damaged area is larger than 6mm.</li><li${_scopeId2}>If you hear a squeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Repair Service"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We seal your punctured tyre securely at your desired location."),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Is my puncture repairable?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " It's quite complicated actually. Whether the tyre is repairable or not depends on many factors, such as: The location of the puncture, size of the puncture, the condition & age of the tyre or whether or not the tyre is a runflat tyre. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" Read more at our "),
                            createVNode(unref(Link), {
                              href: "/puncture-repair",
                              class: "text-blue-600 underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("puncture repair")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" page. ")
                          ])
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Sometimes it's better to go for a new tyre"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you've repaired the same tyre once before. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " It can be more cost-effective to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.")
                        ]),
                        createVNode("div", { class: "col-span-12 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "When should I get a new tyre?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, "You should get your tyres changed if you experience any of the following signs of damage:"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-3 space-y-1" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "Runflat tyres cannot be repaired."),
                            createVNode("li", null, "If the diameter of the damaged area is larger than 6mm."),
                            createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Repair Service"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We seal your punctured tyre securely at your desired location."),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Is my puncture repairable?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " It's quite complicated actually. Whether the tyre is repairable or not depends on many factors, such as: The location of the puncture, size of the puncture, the condition & age of the tyre or whether or not the tyre is a runflat tyre. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre. If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" Read more at our "),
                          createVNode(unref(Link), {
                            href: "/puncture-repair",
                            class: "text-blue-600 underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("puncture repair")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" page. ")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Sometimes it's better to go for a new tyre"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again, especially if you've repaired the same tyre once before. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " It can be more cost-effective to go for a brand new tyre as it will most likely last longer than the old tyre and give you better performance depending on the tyre. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.")
                      ]),
                      createVNode("div", { class: "col-span-12 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "When should I get a new tyre?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, "You should get your tyres changed if you experience any of the following signs of damage:"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-3 space-y-1" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "Runflat tyres cannot be repaired."),
                          createVNode("li", null, "If the diameter of the damaged area is larger than 6mm."),
                          createVNode("li", null, "If you hear a squeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MobileTyreRepair.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Privacy Policy | Tyres Anywhere</title><meta name="description" content="Tyres Anywhere&#39;s Privacy Policy"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/privacy-policy"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Privacy Policy | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "Tyres Anywhere's Privacy Policy"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/privacy-policy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8"${_scopeId}><h1 class="sm:text-4xl text-3xl sm:mb-12 mb-6"${_scopeId}>Privacy Policy</h1><p class="text-sm"${_scopeId}> Tyres Anywhere respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Controller</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Tyres Anywhere LTD is the controller and responsible for your personal data. </p><br${_scopeId}><p class="text-sm"${_scopeId}> If you have any questions about this privacy notice, please contact the data privacy manager here <a href="mailto:info@tyres-anywhere.co.uk"${_scopeId}>info@tyres-anywhere.co.uk</a>. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Third-party links</h3><br${_scopeId}><p class="text-sm"${_scopeId}> This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Cookies</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Cookies are set by the services that we use: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc space-y-2"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Analytics</span> we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit <a class="text-blue-600 underline" href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank" rel="noreferrer"${_scopeId}> https://policies.google.com/technologies/cookies?hl=en-US </a></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Advertising</span> We use Google Adsense to place adverts on our site. Google&#39;s use of advertising cookies enables it and its partners to serve ads based on your visit to Tyres Anywhere LTD and/or other sites on the Internet. You can opt out of personalised ads by visiting <a class="text-blue-600 underline" href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noreferrer"${_scopeId}> https://myaccount.google.com/data-and-privacy </a></li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>The type of personal information we collect</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We currently collect and process the following information: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Identity data</span> (for example first name, last name, title, date of birth)</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Contact data</span> (for example address, email address, mobile number)</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How is the personal information collected?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Most of the personal information we process is directly provided by you for the following reasons: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>apply for services</li><li${_scopeId}>make an enquiry</li><li${_scopeId}>book an appointment</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How we use your personal data</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. </p><br${_scopeId}><b class="text-sm"${_scopeId}>Information provided by you:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to provide you with information/services that you request from us</li><li${_scopeId}>to comply with a legal or regulatory obligation</li></ul><br${_scopeId}><b class="text-sm"${_scopeId}>Information we automatically collect:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to administer our site including troubleshooting, testing, research and statistical purposes</li><li${_scopeId}>to improve our site to ensure that content is presented in the most effective manner for you and your computer</li><li${_scopeId}>to keep our site safe and secure</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Where is your data stored?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Your information is securely stored in our database </p><br${_scopeId}><p class="text-sm"${_scopeId}> We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Your data protection rights</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For details, see our `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/privacy-policy"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`privacy policy`);
                } else {
                  return [
                    createTextVNode("privacy policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` page. </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right of access</span> - You have the right to ask us for copies of your personal information.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to rectification</span> - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to erasure</span> - You have the right to ask us to erase your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to restriction of processing</span> - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to object to processing</span> - You have the the right to object to the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to data portability</span> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li></ul><br${_scopeId}><p class="text-sm"${_scopeId}> You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-4xl text-3xl sm:mb-12 mb-6" }, "Privacy Policy"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Controller"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere LTD is the controller and responsible for your personal data. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" If you have any questions about this privacy notice, please contact the data privacy manager here "),
                  createVNode("a", { href: "mailto:info@tyres-anywhere.co.uk" }, "info@tyres-anywhere.co.uk"),
                  createTextVNode(". ")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Third-party links"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Cookies"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Cookies are set by the services that we use: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc space-y-2" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Google Analytics"),
                    createTextVNode(" we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit "),
                    createVNode("a", {
                      class: "text-blue-600 underline",
                      href: "https://policies.google.com/technologies/cookies?hl=en-US",
                      target: "_blank",
                      rel: "noreferrer"
                    }, " https://policies.google.com/technologies/cookies?hl=en-US ")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Google Advertising"),
                    createTextVNode(" We use Google Adsense to place adverts on our site. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to Tyres Anywhere LTD and/or other sites on the Internet. You can opt out of personalised ads by visiting "),
                    createVNode("a", {
                      class: "text-blue-600 underline",
                      href: "https://myaccount.google.com/data-and-privacy",
                      target: "_blank",
                      rel: "noreferrer"
                    }, " https://myaccount.google.com/data-and-privacy ")
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "The type of personal information we collect"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We currently collect and process the following information: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Identity data"),
                    createTextVNode(" (for example first name, last name, title, date of birth)")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Contact data"),
                    createTextVNode(" (for example address, email address, mobile number)")
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "How is the personal information collected?"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Most of the personal information we process is directly provided by you for the following reasons: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "apply for services"),
                  createVNode("li", null, "make an enquiry"),
                  createVNode("li", null, "book an appointment")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "How we use your personal data"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. "),
                createVNode("br"),
                createVNode("b", { class: "text-sm" }, "Information provided by you:"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "to provide you with information/services that you request from us"),
                  createVNode("li", null, "to comply with a legal or regulatory obligation")
                ]),
                createVNode("br"),
                createVNode("b", { class: "text-sm" }, "Information we automatically collect:"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "to administer our site including troubleshooting, testing, research and statistical purposes"),
                  createVNode("li", null, "to improve our site to ensure that content is presented in the most effective manner for you and your computer"),
                  createVNode("li", null, "to keep our site safe and secure")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Where is your data stored?"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Your information is securely stored in our database "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Your data protection rights"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" For details, see our "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/privacy-policy"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("privacy policy")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" page. ")
                ]),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right of access"),
                    createTextVNode(" - You have the right to ask us for copies of your personal information.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to rectification"),
                    createTextVNode(" - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to erasure"),
                    createTextVNode(" - You have the right to ask us to erase your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to restriction of processing"),
                    createTextVNode(" - You have the right to ask us to restrict the processing of your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to object to processing"),
                    createTextVNode(" - You have the the right to object to the processing of your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to data portability"),
                    createTextVNode(" - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.")
                  ])
                ]),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "PunctureRepair",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Puncture Repair | Tyres Anywhere</title><meta name="description" content="Mobile puncture repair could never be easier! We come and repair your tyre whether your at home, work or even roadside."${_scopeId}><meta name="keywords" content="tyre fitting, mobile tyre fitting, tyre services, repair my tyre"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/puncture-repair"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Puncture Repair | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "Mobile puncture repair could never be easier! We come and repair your tyre whether your at home, work or even roadside."
              }),
              createVNode("meta", {
                name: "keywords",
                content: "tyre fitting, mobile tyre fitting, tyre services, repair my tyre"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/puncture-repair"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}><div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]"${_scopeId}><img src="/assets/images/showcase/puncture-repair.webp" srcset="/assets/images/showcase/puncture-repair.webp 1920w,
                                    /assets/images/showcase/puncture-repair-500.webp 500w,
                                    /assets/images/showcase/puncture-repair-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Puncture Repair</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies.</p></div></div></div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode("div", { class: "relative overflow-hidden md:h-full sm:h-[300px] h-[200px]" }, [
                    createVNode("img", {
                      src: "/assets/images/showcase/puncture-repair.webp",
                      srcset: "/assets/images/showcase/puncture-repair.webp 1920w,\n                                    /assets/images/showcase/puncture-repair-500.webp 500w,\n                                    /assets/images/showcase/puncture-repair-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Puncture Repair"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Puncture Repair</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>Our <b${_scopeId2}>Puncture Repair</b> service will repair your old tyre today!</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-100" src="/assets/images/main/tyre-fitting-2.webp" srcset="/assets/images/main/tyre-fitting-2.webp 1024w,
									/assets/images/main/tyre-fitting-2-500.webp 500w,
									/assets/images/main/tyre-fitting-2-300.webp 300w,
									/assets/images/main/tyre-fitting-2-150.webp 150w" sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px" alt="Wheel being secured to vehicle"${_scopeId2}></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Is my puncture sealable?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you managed to locate the puncture, you can check if your tyre is repairable if it doesn&#39;t fit any of the following criteria: </p><br${_scopeId2}><ul class="text-sm list-disc pl-5 mt-2 space-y-1"${_scopeId2}><li${_scopeId2}>If the puncture is located on the sidewall of the tyre.</li><li${_scopeId2}>Runflat tyres cannot be repaired.</li><li${_scopeId2}>If the diameter of the damaged area is larger than 6mm.</li><li${_scopeId2}>If your tyre treads are worn less than 1.6mm.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li></ul><h2 class="lg:text-3xl text-2xl font-light mt-8"${_scopeId2}>What should I do?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> If your punctured tyre meets the criteria above and you&#39;re happy to proceed with a puncture repair </p><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>To arrange a mobile tyre change or repair, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></span></p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Puncture Repair"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, [
                        createTextVNode("Our "),
                        createVNode("b", null, "Puncture Repair"),
                        createTextVNode(" service will repair your old tyre today!")
                      ]),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-100",
                            src: "/assets/images/main/tyre-fitting-2.webp",
                            srcset: "/assets/images/main/tyre-fitting-2.webp 1024w,\n									/assets/images/main/tyre-fitting-2-500.webp 500w,\n									/assets/images/main/tyre-fitting-2-300.webp 300w,\n									/assets/images/main/tyre-fitting-2-150.webp 150w",
                            sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                            alt: "Wheel being secured to vehicle"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Is my puncture sealable?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If you managed to locate the puncture, you can check if your tyre is repairable if it doesn't fit any of the following criteria: "),
                          createVNode("br"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2 space-y-1" }, [
                            createVNode("li", null, "If the puncture is located on the sidewall of the tyre."),
                            createVNode("li", null, "Runflat tyres cannot be repaired."),
                            createVNode("li", null, "If the diameter of the damaged area is larger than 6mm."),
                            createVNode("li", null, "If your tyre treads are worn less than 1.6mm."),
                            createVNode("li", null, "If your tyre shows signs of ageing.")
                          ]),
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light mt-8" }, "What should I do?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If your punctured tyre meets the criteria above and you're happy to proceed with a puncture repair "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("To arrange a mobile tyre change or repair, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Puncture Repair"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, [
                      createTextVNode("Our "),
                      createVNode("b", null, "Puncture Repair"),
                      createTextVNode(" service will repair your old tyre today!")
                    ]),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-100",
                          src: "/assets/images/main/tyre-fitting-2.webp",
                          srcset: "/assets/images/main/tyre-fitting-2.webp 1024w,\n									/assets/images/main/tyre-fitting-2-500.webp 500w,\n									/assets/images/main/tyre-fitting-2-300.webp 300w,\n									/assets/images/main/tyre-fitting-2-150.webp 150w",
                          sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                          alt: "Wheel being secured to vehicle"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Is my puncture sealable?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If you managed to locate the puncture, you can check if your tyre is repairable if it doesn't fit any of the following criteria: "),
                        createVNode("br"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2 space-y-1" }, [
                          createVNode("li", null, "If the puncture is located on the sidewall of the tyre."),
                          createVNode("li", null, "Runflat tyres cannot be repaired."),
                          createVNode("li", null, "If the diameter of the damaged area is larger than 6mm."),
                          createVNode("li", null, "If your tyre treads are worn less than 1.6mm."),
                          createVNode("li", null, "If your tyre shows signs of ageing.")
                        ]),
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light mt-8" }, "What should I do?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If your punctured tyre meets the criteria above and you're happy to proceed with a puncture repair "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("To arrange a mobile tyre change or repair, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PunctureRepair.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Sitemap",
  __ssrInlineRender: true,
  props: {
    areas: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Sitemap | Tyres Anywhere</title><meta name="description" content="A Sitemap that includes all the possible pages from Tyres Anywhere"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/sitemap"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Sitemap | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "A Sitemap that includes all the possible pages from Tyres Anywhere"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/sitemap"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8"${_scopeId}><h1 class="sm:text-3xl text-2xl sm:mb-12 mb-6"${_scopeId}>Tyres Anywhere LTD Site Map</h1><div class="grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8"${_scopeId}><div class="xl:col-span-3 col-span-6"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Tyres Anywhere LTD</p><div class="flex flex-col items-start mt-4 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Home`);
                } else {
                  return [
                    createTextVNode("Home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-fitting",
              class: "md:text-base text-sm text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-repair",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Repair`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Repair")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/commercial-tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Commercial Tyres`);
                } else {
                  return [
                    createTextVNode("Commercial Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/breakdown-recovery",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Breakdown Recovery`);
                } else {
                  return [
                    createTextVNode("Breakdown Recovery")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tyres`);
                } else {
                  return [
                    createTextVNode("Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/contact-us",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact Us`);
                } else {
                  return [
                    createTextVNode("Contact Us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/our-terms-and-conditions",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Terms &amp; Conditions`);
                } else {
                  return [
                    createTextVNode("Terms & Conditions")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/privacy-policy",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Privacy Policy`);
                } else {
                  return [
                    createTextVNode("Privacy Policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="xl:col-span-3 col-span-6"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Service</p><div class="flex flex-col items-start mt-4 space-y-2"${_scopeId}><a href="https://tyresanywhere.com/search-tyres" class="md:text-base text-sm text-blue-600 hover:underline"${_scopeId}>Search Tyres</a></div></div><div class="xl:col-span-6 col-span-12"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Coverage</p><div class="grid grid-cols-12 gap-2 items-start mt-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.areas, (area) => {
              _push2(`<div class="col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/locations/" + area.slug,
                class: "md:text-base text-sm text-blue-600 hover: capitalize"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-3xl text-2xl sm:mb-12 mb-6" }, "Tyres Anywhere LTD Site Map"),
                createVNode("div", { class: "grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8" }, [
                  createVNode("div", { class: "xl:col-span-3 col-span-6" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Tyres Anywhere LTD"),
                    createVNode("div", { class: "flex flex-col items-start mt-4 space-y-2" }, [
                      createVNode(unref(Link), {
                        href: "/",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Home")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/mobile-tyre-fitting",
                        class: "md:text-base text-sm text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mobile Tyre Fitting")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/mobile-tyre-repair",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mobile Tyre Repair")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/commercial-tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Commercial Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/breakdown-recovery",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Breakdown Recovery")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/contact-us",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Contact Us")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/our-terms-and-conditions",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Terms & Conditions")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/privacy-policy",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Privacy Policy")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "xl:col-span-3 col-span-6" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Service"),
                    createVNode("div", { class: "flex flex-col items-start mt-4 space-y-2" }, [
                      createVNode("a", {
                        href: "https://tyresanywhere.com/search-tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, "Search Tyres")
                    ])
                  ]),
                  createVNode("div", { class: "xl:col-span-6 col-span-12" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Coverage"),
                    createVNode("div", { class: "grid grid-cols-12 gap-2 items-start mt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.areas, (area) => {
                        return openBlock(), createBlock("div", { class: "col-span-4" }, [
                          createVNode(unref(Link), {
                            href: "/locations/" + area.slug,
                            class: "md:text-base text-sm text-blue-600 hover: capitalize",
                            textContent: toDisplayString(area.area)
                          }, null, 8, ["href", "textContent"])
                        ]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Sitemap.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "TermsAndConditions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Terms and Conditions | Tyres Anywhere</title><meta name="description" content="Tyres Anywhere, Terms &amp; Conditions"${_scopeId}><meta name="keywords" content="tyre fitting, mobile tyre fitting, tyre services, repair my tyre"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/our-terms-and-conditions"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Terms and Conditions | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "Tyres Anywhere, Terms & Conditions"
              }),
              createVNode("meta", {
                name: "keywords",
                content: "tyre fitting, mobile tyre fitting, tyre services, repair my tyre"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/our-terms-and-conditions"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8"${_scopeId}><h1 class="sm:text-4xl text-3xl sm:mb-12 mb-6"${_scopeId}>Terms &amp; Conditions</h1><p class="text-sm"${_scopeId}> Tyres Anywhere is a mobile tyre fitting business in the UK that provides emergency or non-emergency tyre fitting or repairs. Contact information is as followed: telephone: (07442 980101), email: (info@tyres-anywhere.co.uk) </p><br${_scopeId}><p class="text-sm"${_scopeId}> The terms and conditions declared on this page control the bond within the company Tyres Anywhere LTD and the visitors. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Henceforth, </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;We&quot;, &quot;Our&quot;, or &quot;Us&quot; represents the company Tyres Anywhere </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;Our website&quot; represents the website of https://www.tyres-anywhere.co.uk </p><br${_scopeId}><p class="text-sm"${_scopeId}> &quot;You&quot; represents our customers or visitors/users of this website </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>1. How to contact us</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Call us on 07442 980101 </p><br${_scopeId}><p class="text-sm"${_scopeId}> Email at info@tyres-anywhere.co.uk </p><br${_scopeId}><p class="text-sm"${_scopeId}> Contact us through our website&#39;s `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/contact-us"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`contact page`);
                } else {
                  return [
                    createTextVNode("contact page")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>2. Online Prices and Booking</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The price of all the products that we offer is in GBP (£), with cost of labour and parts. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Online purchases and transactions does not put you in any binding contracts with us. There is only a one-time charge either on the website or in-person. </p><br${_scopeId}><p class="text-sm"${_scopeId}> We have the right to postpone or cancel the order (even after the order confirmation), if we are unable to carry out the order. We may be unable to carry out the order if the purchased product is out of stock in our local stock &amp; our products provider&#39;s stock or if the information about the purchased product is incorrect. In this situation, we will offer you an alternative product or reschedule the arrangement. If you have already paid for this product and we cannot come to an agreement, then you may cancel the order and acquire a full refund - this only applies to online payment or deposits. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>3. Products</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The products may also vary from their online pictures. The images of the products on our website are for illustrative purposes only, so your product may not be the exact product as the image. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Customers ordering tyres online for mobile fitting should confirm the tyre size with the tyre size currently fitted to the vehicle before placing the order. If incorrect tyres are ordered on our website, we may reschedule your fitting appointment for either later on in the day or any approaching days. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>4. Orders and delivery</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Ordered products that are unavailable in our local stock will be delivered from our wholesale providers. We cannot guarantee delivery times for our providers and therefore in this situation we may be required to reschedule your fitting appointment. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>5. Order Cancellations</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For online orders/deposits only, the cancellation request must be made within 24 hours of when the order was placed to claim a refund. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>6. Copyright</h3><br${_scopeId}><p class="text-sm"${_scopeId}> All the materials present on our website is copyrighted to us. Any unauthorised use of our material for commercial use is strictly disallowed and considered as copyright infringement. Threats will be taken seriously, and we will be forced to take actions such as site restriction, financial compensation and legal proceedings. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>7. Privacy Policy</h3><br${_scopeId}><p class="text-sm"${_scopeId}> For details, see our `);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-blue-600 underline",
              href: "/privacy-policy"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`privacy policy`);
                } else {
                  return [
                    createTextVNode("privacy policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` page. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>8. Guarantees</h3><br${_scopeId}><p class="text-sm"${_scopeId}> The products we sell on our site are covered by the manufacturer&#39;s guarantee. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Any guarantee claims should be notified to us immediately. You will need to present an invoice that provides us with proof of purchase. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Your guarantee claim may be rejected if: </p><br${_scopeId}><p class="text-sm"${_scopeId}> The product in question has been damaged due to failure of commitment to the manufacturer&#39;s instructions </p><br${_scopeId}><p class="text-sm"${_scopeId}> The product in question has been damaged due to natural causes, theft, wear or improper driving. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>9. Third-party website links</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Links to third-party websites are provided for your information only </p><br${_scopeId}><p class="text-sm"${_scopeId}> We have no control over those websites so we request you examine the privacy policy and terms &amp; conditions of these websites before using their services. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>10. Updating terms &amp; conditions</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We have the right to alter the terms and conditions on this page when required. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-4 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-4xl text-3xl sm:mb-12 mb-6" }, "Terms & Conditions"),
                createVNode("p", { class: "text-sm" }, " Tyres Anywhere is a mobile tyre fitting business in the UK that provides emergency or non-emergency tyre fitting or repairs. Contact information is as followed: telephone: (07442 980101), email: (info@tyres-anywhere.co.uk) "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The terms and conditions declared on this page control the bond within the company Tyres Anywhere LTD and the visitors. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Henceforth, "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "We", "Our", or "Us" represents the company Tyres Anywhere '),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "Our website" represents the website of https://www.tyres-anywhere.co.uk '),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, ' "You" represents our customers or visitors/users of this website '),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "1. How to contact us"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Call us on 07442 980101 "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Email at info@tyres-anywhere.co.uk "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" Contact us through our website's "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/contact-us"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("contact page")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "2. Online Prices and Booking"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The price of all the products that we offer is in GBP (£), with cost of labour and parts. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Online purchases and transactions does not put you in any binding contracts with us. There is only a one-time charge either on the website or in-person. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have the right to postpone or cancel the order (even after the order confirmation), if we are unable to carry out the order. We may be unable to carry out the order if the purchased product is out of stock in our local stock & our products provider's stock or if the information about the purchased product is incorrect. In this situation, we will offer you an alternative product or reschedule the arrangement. If you have already paid for this product and we cannot come to an agreement, then you may cancel the order and acquire a full refund - this only applies to online payment or deposits. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "3. Products"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The products may also vary from their online pictures. The images of the products on our website are for illustrative purposes only, so your product may not be the exact product as the image. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Customers ordering tyres online for mobile fitting should confirm the tyre size with the tyre size currently fitted to the vehicle before placing the order. If incorrect tyres are ordered on our website, we may reschedule your fitting appointment for either later on in the day or any approaching days. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "4. Orders and delivery"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Ordered products that are unavailable in our local stock will be delivered from our wholesale providers. We cannot guarantee delivery times for our providers and therefore in this situation we may be required to reschedule your fitting appointment. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "5. Order Cancellations"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " For online orders/deposits only, the cancellation request must be made within 24 hours of when the order was placed to claim a refund. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "6. Copyright"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " All the materials present on our website is copyrighted to us. Any unauthorised use of our material for commercial use is strictly disallowed and considered as copyright infringement. Threats will be taken seriously, and we will be forced to take actions such as site restriction, financial compensation and legal proceedings. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "7. Privacy Policy"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" For details, see our "),
                  createVNode(unref(Link), {
                    class: "text-blue-600 underline",
                    href: "/privacy-policy"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("privacy policy")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" page. ")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "8. Guarantees"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The products we sell on our site are covered by the manufacturer's guarantee. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Any guarantee claims should be notified to us immediately. You will need to present an invoice that provides us with proof of purchase. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Your guarantee claim may be rejected if: "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The product in question has been damaged due to failure of commitment to the manufacturer's instructions "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " The product in question has been damaged due to natural causes, theft, wear or improper driving. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "9. Third-party website links"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Links to third-party websites are provided for your information only "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have no control over those websites so we request you examine the privacy policy and terms & conditions of these websites before using their services. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "10. Updating terms & conditions"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We have the right to alter the terms and conditions on this page when required. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsAndConditions.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "TyreReplacement",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Tyre Replacement | Tyres Anywhere</title><meta name="description" content="24/7 Mobile tyre replacement couldn&#39;t be easier! Call us now to grab yourself a brand new high quality tyre - fitted wherever you are!"${_scopeId}><meta name="keywords" content="tyre fitting, mobile tyre fitting, tyre services, repair my tyre"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/tyre-replacement"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Tyre Replacement | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "24/7 Mobile tyre replacement couldn't be easier! Call us now to grab yourself a brand new high quality tyre - fitted wherever you are!"
              }),
              createVNode("meta", {
                name: "keywords",
                content: "tyre fitting, mobile tyre fitting, tyre services, repair my tyre"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/tyre-replacement"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}><div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]"${_scopeId}><img src="/assets/images/showcase/tyre-replacement.webp" srcset="/assets/images/showcase/tyre-replacement.webp 1920w,
                                    /assets/images/showcase/tyre-replacement-500.webp 500w,
                                    /assets/images/showcase/tyre-replacement-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>24/7 Mobile Tyre Replacement</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies.</p></div></div></div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode("div", { class: "relative overflow-hidden md:h-full sm:h-[300px] h-[200px]" }, [
                    createVNode("img", {
                      src: "/assets/images/showcase/tyre-replacement.webp",
                      srcset: "/assets/images/showcase/tyre-replacement.webp 1920w,\n                                    /assets/images/showcase/tyre-replacement-500.webp 500w,\n                                    /assets/images/showcase/tyre-replacement-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "24/7 Mobile Tyre Replacement"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Mobile Tyre Replacement</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>Our <b${_scopeId2}>Tyre Replacement</b> service will replace your old tyre today!</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-100" src="/assets/images/main/tyre-fitting-2.webp" srcset="/assets/images/main/tyre-fitting-2.webp 1024w,
									/assets/images/main/tyre-fitting-2-500.webp 500w,
									/assets/images/main/tyre-fitting-2-300.webp 300w,
									/assets/images/main/tyre-fitting-2-150.webp 150w" sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px" alt="Wheel being secured to vehicle"${_scopeId2}></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Need to get your tyres changed?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Have faulty tyres and want to replace them? At <b${_scopeId2}>Tyres Anywhere</b> we provide easy alternative to going to repair your tyres at a mechanic. Our Mobile Tyre Fitting Service will bring the mechanic to you, whether you&#39;re at home, stuck on a motorway or anywhere else, you can call us and expect one of our specialists to be with you soon. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> In addition to that, if your situation is not as urgent but you still need us, you can <a href="https://tyresanywhere.com/search-tyres" class="text-blue-600 underline"${_scopeId2}>Make a Booking</a> and choose what you need in our broad range of options </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> More info about your vehicle&#39;s tyres can be found in our `);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: "/tyres",
                    class: "text-blue-600 underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`tyres`);
                      } else {
                        return [
                          createTextVNode("tyres")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` page </p></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>What can you expect when we arrive?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> When we arrive, our Tyre Fitter experts will efficiently change your tyre in no time. Our colleagues will handle your tyre with up-most care. You can rest whilst they swiftly secure your brand new tyre so you can be safe next time you travel. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> If you&#39;ve made a booking, we will contact you before we arrive. You can calmly rest at home or watch our specialist get the job done in no time and get your vehicle up and running. </p></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-100" src="/assets/images/main/tyre-fitting-3.webp" srcset="/assets/images/main/tyre-fitting-3.webp 1024w,
									/assets/images/main/tyre-fitting-3-500.webp 500w,
									/assets/images/main/tyre-fitting-3-300.webp 300w,
									/assets/images/main/tyre-fitting-3-150.webp 150w" sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px" alt="Wheel being secured to vehicle"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Replacement"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, [
                        createTextVNode("Our "),
                        createVNode("b", null, "Tyre Replacement"),
                        createTextVNode(" service will replace your old tyre today!")
                      ]),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-100",
                            src: "/assets/images/main/tyre-fitting-2.webp",
                            srcset: "/assets/images/main/tyre-fitting-2.webp 1024w,\n									/assets/images/main/tyre-fitting-2-500.webp 500w,\n									/assets/images/main/tyre-fitting-2-300.webp 300w,\n									/assets/images/main/tyre-fitting-2-150.webp 150w",
                            sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                            alt: "Wheel being secured to vehicle"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Need to get your tyres changed?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" Have faulty tyres and want to replace them? At "),
                            createVNode("b", null, "Tyres Anywhere"),
                            createTextVNode(" we provide easy alternative to going to repair your tyres at a mechanic. Our Mobile Tyre Fitting Service will bring the mechanic to you, whether you're at home, stuck on a motorway or anywhere else, you can call us and expect one of our specialists to be with you soon. ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" In addition to that, if your situation is not as urgent but you still need us, you can "),
                            createVNode("a", {
                              href: "https://tyresanywhere.com/search-tyres",
                              class: "text-blue-600 underline"
                            }, "Make a Booking"),
                            createTextVNode(" and choose what you need in our broad range of options ")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" More info about your vehicle's tyres can be found in our "),
                            createVNode(unref(Link), {
                              href: "/tyres",
                              class: "text-blue-600 underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("tyres")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" page ")
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "What can you expect when we arrive?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " When we arrive, our Tyre Fitter experts will efficiently change your tyre in no time. Our colleagues will handle your tyre with up-most care. You can rest whilst they swiftly secure your brand new tyre so you can be safe next time you travel. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " If you've made a booking, we will contact you before we arrive. You can calmly rest at home or watch our specialist get the job done in no time and get your vehicle up and running. ")
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-100",
                            src: "/assets/images/main/tyre-fitting-3.webp",
                            srcset: "/assets/images/main/tyre-fitting-3.webp 1024w,\n									/assets/images/main/tyre-fitting-3-500.webp 500w,\n									/assets/images/main/tyre-fitting-3-300.webp 300w,\n									/assets/images/main/tyre-fitting-3-150.webp 150w",
                            sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                            alt: "Wheel being secured to vehicle"
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Mobile Tyre Replacement"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, [
                      createTextVNode("Our "),
                      createVNode("b", null, "Tyre Replacement"),
                      createTextVNode(" service will replace your old tyre today!")
                    ]),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-100",
                          src: "/assets/images/main/tyre-fitting-2.webp",
                          srcset: "/assets/images/main/tyre-fitting-2.webp 1024w,\n									/assets/images/main/tyre-fitting-2-500.webp 500w,\n									/assets/images/main/tyre-fitting-2-300.webp 300w,\n									/assets/images/main/tyre-fitting-2-150.webp 150w",
                          sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                          alt: "Wheel being secured to vehicle"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Need to get your tyres changed?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" Have faulty tyres and want to replace them? At "),
                          createVNode("b", null, "Tyres Anywhere"),
                          createTextVNode(" we provide easy alternative to going to repair your tyres at a mechanic. Our Mobile Tyre Fitting Service will bring the mechanic to you, whether you're at home, stuck on a motorway or anywhere else, you can call us and expect one of our specialists to be with you soon. ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" In addition to that, if your situation is not as urgent but you still need us, you can "),
                          createVNode("a", {
                            href: "https://tyresanywhere.com/search-tyres",
                            class: "text-blue-600 underline"
                          }, "Make a Booking"),
                          createTextVNode(" and choose what you need in our broad range of options ")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" More info about your vehicle's tyres can be found in our "),
                          createVNode(unref(Link), {
                            href: "/tyres",
                            class: "text-blue-600 underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("tyres")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" page ")
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "What can you expect when we arrive?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " When we arrive, our Tyre Fitter experts will efficiently change your tyre in no time. Our colleagues will handle your tyre with up-most care. You can rest whilst they swiftly secure your brand new tyre so you can be safe next time you travel. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " If you've made a booking, we will contact you before we arrive. You can calmly rest at home or watch our specialist get the job done in no time and get your vehicle up and running. ")
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-100",
                          src: "/assets/images/main/tyre-fitting-3.webp",
                          srcset: "/assets/images/main/tyre-fitting-3.webp 1024w,\n									/assets/images/main/tyre-fitting-3-500.webp 500w,\n									/assets/images/main/tyre-fitting-3-300.webp 300w,\n									/assets/images/main/tyre-fitting-3-150.webp 150w",
                          sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                          alt: "Wheel being secured to vehicle"
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TyreReplacement.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Tyres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Tyres | Tyres Anywhere</title><meta name="description" content="Learn more about your vehicle tyres"${_scopeId}><meta name="keywords" content="my tyre, tyre size, new tyres, tyre fitting"${_scopeId}><link rel="canonical" href="https://tyres-anywhere.co.uk/tyres"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Tyres | Tyres Anywhere"),
              createVNode("meta", {
                name: "description",
                content: "Learn more about your vehicle tyres"
              }),
              createVNode("meta", {
                name: "keywords",
                content: "my tyre, tyre size, new tyres, tyre fitting"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyres-anywhere.co.uk/tyres"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]"${_scopeId}><div class="xl:w-[70%] md:w-[65%] w-full"${_scopeId}><div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]"${_scopeId}><img src="/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp" srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w" class="object-cover object-center w-full h-full brightness-[0.6]" sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw" alt="Mobile Tyre Fitting"${_scopeId}><div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center"${_scopeId}><h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1"${_scopeId}>Your Tyre Fitters</h1><p class="sm:text-sm text-xs text-center"${_scopeId}>Same day service for emergencies &amp; non-emergencies.</p></div></div></div><div class="xl:w-[30%] md:w-[35%] w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(SearchTyre, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]" }, [
                createVNode("div", { class: "xl:w-[70%] md:w-[65%] w-full" }, [
                  createVNode("div", { class: "relative overflow-hidden md:h-full sm:h-[300px] h-[200px]" }, [
                    createVNode("img", {
                      src: "/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp",
                      srcset: "/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,\n                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w",
                      class: "object-cover object-center w-full h-full brightness-[0.6]",
                      sizes: "(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw",
                      alt: "Mobile Tyre Fitting"
                    }),
                    createVNode("div", { class: "absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center" }, [
                      createVNode("h1", { class: "md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1" }, "Your Tyre Fitters"),
                      createVNode("p", { class: "sm:text-sm text-xs text-center" }, "Same day service for emergencies & non-emergencies.")
                    ])
                  ])
                ]),
                createVNode("div", { class: "xl:w-[30%] md:w-[35%] w-full" }, [
                  createVNode(SearchTyre)
                ])
              ]),
              createVNode(_sfc_main$e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="xl:px-11 sm:px-8 px-4"${_scopeId2}><h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId2}>Your Tyre Fitters</h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId2}>We provide and fit the best Tyres for you in no time!</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId2}><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-100" src="/assets/images/main/tyre-1.webp" srcset="/assets/images/main/tyre-1.webp 1024w,
									/assets/images/main/tyre-1-500.webp 500w,
									/assets/images/main/tyre-1-300.webp 300w,
									/assets/images/main/tyre-1-150.webp 150w" sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px" alt="Wheel being secured to vehicle"${_scopeId2}></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>About your tyres</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK the minimum tyre tread depth is 1.6mm. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> The depth of the tyre treads can be tested using the &#39;20p Check&#39;, a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Regardless of the vehicle you drive, here at Tyres Anywhere we have the right tyres for you, whether it&#39;s Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. </p></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>Don&#39;t know the tyre size you need?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> You can find the size of your car tyre from the tyre itself. On the side of the tyre there will be a few numbers that show the size of the tyre. The first number is the width of the tyre measured from one side to the other. The second number is the profile of the tyre which is measured from the rim to edge of the tyre. The third number is the rim size and the last is the speed rating. You will need these when purchasing a tyre for your vehicle. </p><br${_scopeId2}><p class="text-sm"${_scopeId2}> Another way to find the size of your tyres is by reading the <b${_scopeId2}>vehicle owner manual</b>. </p></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-100" src="/assets/images/main/tyre-size-guide.webp" srcset="/assets/images/main/tyre-size-guide.webp 1024w,
									/assets/images/main/tyre-size-guide-500.webp 500w,
									/assets/images/main/tyre-size-guide-300.webp 300w,
									/assets/images/main/tyre-size-guide-150.webp 150w" sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px" alt="Wheel being secured to vehicle"${_scopeId2}></div><div class="xl:col-span-4 col-span-5 lg:p-4"${_scopeId2}><img class="w-100" src="/assets/images/main/tyre-3.webp" srcset="/assets/images/main/tyre-3.webp 1024w,
									/assets/images/main/tyre-3-500.webp 500w,
									/assets/images/main/tyre-3-300.webp 300w,
									/assets/images/main/tyre-3-150.webp 150w" sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px" alt="Wheel being secured to vehicle"${_scopeId2}></div><div class="xl:col-span-8 col-span-7 lg:p-4"${_scopeId2}><h2 class="lg:text-3xl text-2xl font-light"${_scopeId2}>When should I get my tyres changed?</h2><br${_scopeId2}><p class="text-sm"${_scopeId2}> You should get your tyres changed if you experience any of the following signs of damage: </p><br${_scopeId2}><ul class="text-sm list-disc pl-5 mt-2 space-y-1"${_scopeId2}><li${_scopeId2}>Once the tyre tread has worn to the legal limit of 1.6mm.</li><li${_scopeId2}>If you hear a sqeaky humming sound caused by a chopped tread.</li><li${_scopeId2}>A puncture on the side of the tyre.</li><li${_scopeId2}>You can notice the lack of traction in your tyres due to tread wear.</li><li${_scopeId2}>If your tyre shows signs of ageing.</li><li${_scopeId2}>If the tyre is not suited for your vehicle.</li><li${_scopeId2}>Other reasons.</li></ul><br${_scopeId2}><p class="text-sm flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId2}></path></svg><span${_scopeId2}>To arrange a mobile tyre change or repair, please call us on <a class="text-blue-600 underline" href="tel:07442980101"${_scopeId2}>07442 980101</a></span></p></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                      createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Your Tyre Fitters"),
                      createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We provide and fit the best Tyres for you in no time!"),
                      createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-100",
                            src: "/assets/images/main/tyre-1.webp",
                            srcset: "/assets/images/main/tyre-1.webp 1024w,\n									/assets/images/main/tyre-1-500.webp 500w,\n									/assets/images/main/tyre-1-300.webp 300w,\n									/assets/images/main/tyre-1-150.webp 150w",
                            sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                            alt: "Wheel being secured to vehicle"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "About your tyres"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK the minimum tyre tread depth is 1.6mm. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " The depth of the tyre treads can be tested using the '20p Check', a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " Regardless of the vehicle you drive, here at Tyres Anywhere we have the right tyres for you, whether it's Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. ")
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Don't know the tyre size you need?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You can find the size of your car tyre from the tyre itself. On the side of the tyre there will be a few numbers that show the size of the tyre. The first number is the width of the tyre measured from one side to the other. The second number is the profile of the tyre which is measured from the rim to edge of the tyre. The third number is the rim size and the last is the speed rating. You will need these when purchasing a tyre for your vehicle. "),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, [
                            createTextVNode(" Another way to find the size of your tyres is by reading the "),
                            createVNode("b", null, "vehicle owner manual"),
                            createTextVNode(". ")
                          ])
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-100",
                            src: "/assets/images/main/tyre-size-guide.webp",
                            srcset: "/assets/images/main/tyre-size-guide.webp 1024w,\n									/assets/images/main/tyre-size-guide-500.webp 500w,\n									/assets/images/main/tyre-size-guide-300.webp 300w,\n									/assets/images/main/tyre-size-guide-150.webp 150w",
                            sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                            alt: "Wheel being secured to vehicle"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                          createVNode("img", {
                            class: "w-100",
                            src: "/assets/images/main/tyre-3.webp",
                            srcset: "/assets/images/main/tyre-3.webp 1024w,\n									/assets/images/main/tyre-3-500.webp 500w,\n									/assets/images/main/tyre-3-300.webp 300w,\n									/assets/images/main/tyre-3-150.webp 150w",
                            sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                            alt: "Wheel being secured to vehicle"
                          })
                        ]),
                        createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                          createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "When should I get my tyres changed?"),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                          createVNode("br"),
                          createVNode("ul", { class: "text-sm list-disc pl-5 mt-2 space-y-1" }, [
                            createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                            createVNode("li", null, "If you hear a sqeaky humming sound caused by a chopped tread."),
                            createVNode("li", null, "A puncture on the side of the tyre."),
                            createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                            createVNode("li", null, "If your tyre shows signs of ageing."),
                            createVNode("li", null, "If the tyre is not suited for your vehicle."),
                            createVNode("li", null, "Other reasons.")
                          ]),
                          createVNode("br"),
                          createVNode("p", { class: "text-sm flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              }),
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", null, [
                              createTextVNode("To arrange a mobile tyre change or repair, please call us on "),
                              createVNode("a", {
                                class: "text-blue-600 underline",
                                href: "tel:07442980101"
                              }, "07442 980101")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Content, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "xl:px-11 sm:px-8 px-4" }, [
                    createVNode("h1", { class: "font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase" }, "Your Tyre Fitters"),
                    createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We provide and fit the best Tyres for you in no time!"),
                    createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-100",
                          src: "/assets/images/main/tyre-1.webp",
                          srcset: "/assets/images/main/tyre-1.webp 1024w,\n									/assets/images/main/tyre-1-500.webp 500w,\n									/assets/images/main/tyre-1-300.webp 300w,\n									/assets/images/main/tyre-1-150.webp 150w",
                          sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                          alt: "Wheel being secured to vehicle"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "About your tyres"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground, so it must always be in the best condition to ensure your safety. The condition depends on many things, such as the driver, wheel alignment and pressure, and the road. In the UK the minimum tyre tread depth is 1.6mm. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " The depth of the tyre treads can be tested using the '20p Check', a 20p coin should fit enough so it hides the outer edges, otherwise your tyre may be illegal. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " Regardless of the vehicle you drive, here at Tyres Anywhere we have the right tyres for you, whether it's Run-flats, 4x4, all-season or just regular tyres, our specialists always choose the most appropriate and best-suited tyre for your car. ")
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "Don't know the tyre size you need?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You can find the size of your car tyre from the tyre itself. On the side of the tyre there will be a few numbers that show the size of the tyre. The first number is the width of the tyre measured from one side to the other. The second number is the profile of the tyre which is measured from the rim to edge of the tyre. The third number is the rim size and the last is the speed rating. You will need these when purchasing a tyre for your vehicle. "),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, [
                          createTextVNode(" Another way to find the size of your tyres is by reading the "),
                          createVNode("b", null, "vehicle owner manual"),
                          createTextVNode(". ")
                        ])
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-100",
                          src: "/assets/images/main/tyre-size-guide.webp",
                          srcset: "/assets/images/main/tyre-size-guide.webp 1024w,\n									/assets/images/main/tyre-size-guide-500.webp 500w,\n									/assets/images/main/tyre-size-guide-300.webp 300w,\n									/assets/images/main/tyre-size-guide-150.webp 150w",
                          sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                          alt: "Wheel being secured to vehicle"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-4 col-span-5 lg:p-4" }, [
                        createVNode("img", {
                          class: "w-100",
                          src: "/assets/images/main/tyre-3.webp",
                          srcset: "/assets/images/main/tyre-3.webp 1024w,\n									/assets/images/main/tyre-3-500.webp 500w,\n									/assets/images/main/tyre-3-300.webp 300w,\n									/assets/images/main/tyre-3-150.webp 150w",
                          sizes: "(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px",
                          alt: "Wheel being secured to vehicle"
                        })
                      ]),
                      createVNode("div", { class: "xl:col-span-8 col-span-7 lg:p-4" }, [
                        createVNode("h2", { class: "lg:text-3xl text-2xl font-light" }, "When should I get my tyres changed?"),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm" }, " You should get your tyres changed if you experience any of the following signs of damage: "),
                        createVNode("br"),
                        createVNode("ul", { class: "text-sm list-disc pl-5 mt-2 space-y-1" }, [
                          createVNode("li", null, "Once the tyre tread has worn to the legal limit of 1.6mm."),
                          createVNode("li", null, "If you hear a sqeaky humming sound caused by a chopped tread."),
                          createVNode("li", null, "A puncture on the side of the tyre."),
                          createVNode("li", null, "You can notice the lack of traction in your tyres due to tread wear."),
                          createVNode("li", null, "If your tyre shows signs of ageing."),
                          createVNode("li", null, "If the tyre is not suited for your vehicle."),
                          createVNode("li", null, "Other reasons.")
                        ]),
                        createVNode("br"),
                        createVNode("p", { class: "text-sm flex items-center" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4 w-4 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            }),
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          createVNode("span", null, [
                            createTextVNode("To arrange a mobile tyre change or repair, please call us on "),
                            createVNode("a", {
                              class: "text-blue-600 underline",
                              href: "tel:07442980101"
                            }, "07442 980101")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tyres.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/BreakdownRecovery.vue": __vite_glob_0_0, "./Pages/CommercialTyres.vue": __vite_glob_0_1, "./Pages/ContactUs.vue": __vite_glob_0_2, "./Pages/Index.vue": __vite_glob_0_3, "./Pages/Location.vue": __vite_glob_0_4, "./Pages/MobileTyreFitting.vue": __vite_glob_0_5, "./Pages/MobileTyreRepair.vue": __vite_glob_0_6, "./Pages/PrivacyPolicy.vue": __vite_glob_0_7, "./Pages/PunctureRepair.vue": __vite_glob_0_8, "./Pages/Sitemap.vue": __vite_glob_0_9, "./Pages/TermsAndConditions.vue": __vite_glob_0_10, "./Pages/TyreReplacement.vue": __vite_glob_0_11, "./Pages/Tyres.vue": __vite_glob_0_12 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
